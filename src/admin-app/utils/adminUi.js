export const ENTITY_LABELS = {
  leads: { singular: 'лид', plural: 'лиды' },
  sensors: { singular: 'датчик', plural: 'датчики' },
  controllers: { singular: 'контроллер', plural: 'контроллеры' },
  projects: { singular: 'проект', plural: 'проекты' },
  articles: { singular: 'статья', plural: 'статьи' },
  detectors: { singular: 'детектор', plural: 'детекторы' },
};

export const FIELD_LABELS = {
  id: 'ID',
  name: 'Имя',
  title: 'Заголовок',
  slug: 'Слаг',
  phone: 'Телефон',
  comment: 'Комментарий',
  consent: 'Согласие',
  page_url: 'URL страницы',
  form_type: 'Тип формы',
  submitted_at: 'Отправлено',
  type: 'Тип',
  model: 'Модель',
  description: 'Описание',
  content: 'Контент',
  author: 'Автор',
  category: 'Категория',
  image_url: 'Изображение',
  image: 'Изображение',
  icon: 'Иконка',
  bg: 'Класс фона',
  is_wide: 'Широкий блок',
  status: 'Статус',
  created_at: 'Создано',
  updated_at: 'Обновлено',
  published_at: 'Опубликовано',
  subtitle: 'Подзаголовок',
  likes: 'Лайки',
};

export const PROJECT_STATUS_LABELS = {
  active: 'Активный',
  draft: 'Черновик',
  archived: 'Архив',
};

export const ARTICLE_CATEGORY_LABELS = {
  article: 'Статья',
  news: 'Новости',
  blog: 'Блог',
  tutorial: 'Инструкция',
};

export function getEntityLabel(entity, mode = 'plural') {
  const labels = ENTITY_LABELS[entity];
  if (!labels) return entity;
  return labels[mode] || labels.plural;
}

export function getFieldLabel(field) {
  return FIELD_LABELS[field] || field.replace(/_/g, ' ');
}

export function translateStatus(value) {
  if (typeof value === 'boolean') {
    return value ? 'Активно' : 'Скрыто';
  }

  if (value in PROJECT_STATUS_LABELS) {
    return PROJECT_STATUS_LABELS[value];
  }

  return value ?? '-';
}

export function translateArticleCategory(value) {
  return ARTICLE_CATEGORY_LABELS[value] || value;
}
