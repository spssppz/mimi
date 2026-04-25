import { NextRequest, NextResponse } from "next/server"

import { createLead } from "@/lib/admin-store"

type LeadPayload = {
  name?: string
  phone?: string
  comment?: string | null
  consent?: boolean
  pageUrl?: string
  formType?: string | null
}

const API_BASE_URL =
  process.env.API_BASE_URL?.trim().replace(/\/+$/, "") ??
  process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/+$/, "") ??
  ""

const LEADS_PATH =
  process.env.API_LEADS_PATH?.trim().replace(/^\/+|\/+$/g, "") ??
  process.env.NEXT_PUBLIC_API_LEADS_PATH?.trim().replace(/^\/+|\/+$/g, "") ??
  "leads"

function validateLead(payload: LeadPayload) {
  const details: string[] = []

  if (!payload.name?.trim()) {
    details.push("name is required")
  }

  const phone = payload.phone?.trim() ?? ""
  const digitsOnly = phone.replace(/\D/g, "")

  if (!phone) {
    details.push("phone is required")
  } else if (!/^[\d\s+().-]+$/.test(phone) || digitsOnly.length < 7 || digitsOnly.length > 20) {
    details.push("phone is invalid")
  }

  if (payload.consent !== true) {
    details.push("consent is required")
  }

  if (!payload.pageUrl?.trim()) {
    details.push("pageUrl is required")
  }

  return details
}

async function parseResponseBody(response: Response) {
  try {
    return await response.json()
  } catch {
    return null
  }
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as LeadPayload | null

  if (!body) {
    return NextResponse.json({ error: "Некорректные данные формы." }, { status: 400 })
  }

  const details = validateLead(body)

  if (details.length > 0) {
    return NextResponse.json({ error: "Validation failed", details }, { status: 400 })
  }

  if (API_BASE_URL) {
    const externalPayload = {
      name: body.name!.trim(),
      phone: body.phone!.trim(),
      comment: body.comment?.trim() || null,
      consent: true,
      pageUrl: body.pageUrl!.trim(),
      formType: body.formType?.trim() || null,
      page_url: body.pageUrl!.trim(),
      form_type: body.formType?.trim() || null,
    }

    try {
      const response = await fetch(`${API_BASE_URL}/${LEADS_PATH}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(externalPayload),
        cache: "no-store",
      })

      const data = await parseResponseBody(response)

      if (!response.ok) {
        return NextResponse.json(
          data ?? { error: "Failed to store lead in backend." },
          { status: response.status }
        )
      }

      return NextResponse.json(data ?? { stored: true }, { status: response.status })
    } catch (error) {
      console.error("Failed to proxy lead to backend:", error)

      return NextResponse.json(
        { error: "Не удалось отправить заявку в backend." },
        { status: 503 }
      )
    }
  }

  const lead = await createLead({
    name: body.name!.trim(),
    phone: body.phone!.trim(),
    comment: body.comment?.trim() || null,
    consent: true,
    pageUrl: body.pageUrl!.trim(),
    formType: body.formType?.trim() || null,
  })

  return NextResponse.json(
    {
      id: lead.id,
      stored: true,
      submittedAt: lead.submittedAt,
    },
    { status: 201 }
  )
}
