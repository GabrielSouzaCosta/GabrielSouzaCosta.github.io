import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import i18next from 'i18next';

const LanguageSwitcher = () => {

  const handleChangeLanguage = async (lng: 'en' | 'pt-BR') => {
    // if (lng === 'en') {
    //   location.href = '/';
    // } else {
    //   location.href = '/'+lng;
    // }
    const formData = new FormData();
    formData.set('language', lng);
    const res = await fetch('/api/change-language', {
      body: formData,
      method: 'POST'
    }).then(r => r.json())

    window.location.reload();
  }

  return (
    <form id='form-lng' action="/api/change-language" method='post'>
      <Select
        value={i18next.language}
        onValueChange={handleChangeLanguage}
        name='language'
      >
        <SelectTrigger className='w-fit text-neutral-700 dark:text-neutral-300'>
          <i className='ph ph-translate text-2xl'></i>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className='w-fit'>
          <SelectItem value="pt-BR">PT-BR</SelectItem>
          <SelectItem value="en">EN</SelectItem>
        </SelectContent>
      </Select>
    </form>
  )
}

export default LanguageSwitcher