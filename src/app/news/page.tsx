'use client'

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Title } from "@/components/UI/Title"
import { ArticleCard } from "@/components/UI/ArticleCard"

import { articles } from "@/data/articles"
import { tags } from "@/data/tags"

const INITIAL_COUNT = 6
const LOAD_MORE_COUNT = 3

function isNewArticle(date: string, days = 7) {
	const articleDate = new Date(`${date}T00:00:00`).getTime()
	const now = Date.now()

	return now - articleDate <= days * 24 * 60 * 60 * 1000
}

function formatArticleDate(date: string) {
	return new Date(`${date}T00:00:00`).toLocaleDateString('ru-RU')
}

export default function NewsPage() {
	const [activeTag, setActiveTag] = useState<string | null>(null)
	const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

	const newArticles = useMemo(() => {
		return articles
			.filter(article => isNewArticle(article.date))
			.sort((a, b) => new Date(`${b.date}T00:00:00`).getTime() - new Date(`${a.date}T00:00:00`).getTime())
	}, [])

	const regularArticles = useMemo(() => {
		return articles
			.filter(article => !isNewArticle(article.date))
			.sort((a, b) => new Date(`${b.date}T00:00:00`).getTime() - new Date(`${a.date}T00:00:00`).getTime())
	}, [])

	const filteredArticles = useMemo(() => {
		if (!activeTag) return regularArticles
		return regularArticles.filter(article => article.tag === activeTag)
	}, [activeTag, regularArticles])

	const visibleArticles = filteredArticles.slice(0, visibleCount)
	const hasMore = visibleCount < filteredArticles.length

	const handleTagClick = (tagLabel: string) => {
		setVisibleCount(INITIAL_COUNT)
		setActiveTag(prev => (prev === tagLabel ? null : tagLabel))
	}

	const handleAllClick = () => {
		setActiveTag(null)
		setVisibleCount(INITIAL_COUNT)
	}

	const handleShowMore = () => {
		setVisibleCount(prev => prev + LOAD_MORE_COUNT)
	}

	const newArticle = newArticles[0]

	return (
		<>
			<Header />

			<main>
				<section className="pt-17.5 pb-22.5">
					<div className="max-w-308 px-4 mx-auto">
						<Title className="mb-10">Полезные статьи</Title>

						{newArticle && (
							<div className="mb-10">
								<article className="group relative bg-[#99e1ff] p-5 max-md:flex-col-reverse flex gap-6 md:gap-5 rounded-[20px]">
									<div className="flex-auto">
										<div className="flex justify-between items-center mb-4 gap-3">
											<span className="text-brand-blue text-[14px]">
												{newArticle.tag}
											</span>

											{isNewArticle(newArticle.date) && (
												<span className="bg-[#0a051a] text-white text-[13px] py-1 px-3 uppercase rounded-tl-[60px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-sm">
													Новое
												</span>
											)}
										</div>

										<h3 className="text-[20px] font-semibold text-[#0a051a] mb-5 transition-colors duration-350 group-hover:text-brand-blue">
											<Link href="">
												{newArticle.title}
												<span className="absolute rounded-[20px] block top-0 left-0 w-full h-full"></span>
											</Link>
										</h3>

										<p className="text-brand-gray font-helvetica text-[15px] font-normal leading-normal mb-6 line-clamp-2">
											{newArticle.description}
										</p>

										<time
											dateTime={newArticle.date}
											className="text-[14px] text-brand-gray font-helvetica"
										>
											{formatArticleDate(newArticle.date)}
										</time>
									</div>

									<div className="aspect-580/300 relative md:w-[50%] grow-0 shrink-0 rounded-2xl overflow-hidden">
										<Image
											src={newArticle.image}
											alt={newArticle.title}
											fill
											className="object-cover"
										/>
									</div>
								</article>
							</div>
						)}

						<div className="flex max-lg:flex-col lg:items-start gap-10 lg:gap-15">
							<div className="grow-0 max-lg:w-full shrink-0 w-40 lg:space-y-3 max-lg:flex gap-3 flex-wrap">
								<button
									type="button"
									onClick={handleAllClick}
									className={`lg:w-full cursor-pointer transition-colors duration-300 rounded-[50px] px-4 py-2.5 inline-flex gap-2.5 items-center font-medium text-[14px] -tracking-[0.01em] ${activeTag === null
										? 'max-lg:bg-[#d9d9d9] lg:bg-[#fcfdff]'
										: 'max-lg:bg-[#fcfdff] max-lg:text-brand-gray lg:hover:bg-[#fcfdff]'
										}`}
								>
									Все
								</button>

								{tags.map(tag => {
									const IconComponent = tag.icon
									const isActive = activeTag === tag.label

									return (
										<button
											key={tag.label}
											type="button"
											onClick={() => handleTagClick(tag.label)}
											className={`lg:w-full cursor-pointer transition-colors duration-300 rounded-[50px] px-4 py-2.5 inline-flex gap-2.5 items-center font-medium text-[14px] -tracking-[0.01em] ${isActive
												? 'max-lg:bg-[#d9d9d9] lg:bg-[#fcfdff]'
												: 'max-lg:bg-[#fcfdff] max-lg:text-brand-gray lg:hover:bg-[#fcfdff]'
												}`}
										>
											<IconComponent className="w-4.5 h-4.5" />
											{tag.label}
										</button>
									)
								})}
							</div>

							<div className="flex-auto">
								<div className="mb-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-5">
									{visibleArticles.map(article => (
										<ArticleCard key={article.id} article={article} />
									))}
								</div>

								{filteredArticles.length === 0 && (
									<div className="text-center text-brand-gray font-helvetica">
										По выбранному тегу статей пока нет
									</div>
								)}

								{hasMore && (
									<div className="text-center">
										<button
											type="button"
											onClick={handleShowMore}
											className="cursor-pointer shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] font-medium text-[13px] text-[#121212] p-3 rounded-[50px] min-w-50 bg-white"
										>
											Показать еще
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	)
}