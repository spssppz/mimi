import { NextRequest, NextResponse } from "next/server"

import { registerAdmin } from "@/lib/admin-auth"

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as
    | { username?: string; password?: string }
    | null

  const username = body?.username?.trim() ?? ""
  const password = body?.password?.trim() ?? ""

  const result = await registerAdmin(username, password)

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }

  return NextResponse.json({
    ok: true,
    admin: result.admin,
  })
}
