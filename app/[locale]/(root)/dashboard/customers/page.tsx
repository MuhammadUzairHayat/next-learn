import { useTranslations } from 'next-intl'
import React, { use } from 'react'

const page = () => {
  const t = useTranslations('customers')
  return (
    <div>
      {t('title')}
    </div>
  )
}

export default page
