import React, { useEffect, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import i18next from 'i18next';

const LanguageSwitcher = () => {

  const [ value, setValue ] = useState(i18next.language)

  const handleChangeLanguage = async (lng: 'en' | 'pt-BR') => {
    i18next.changeLanguage(lng);
    window.localStorage.setItem('language', lng);
    setValue(lng);
  }

  return (
    <form id='form-lng'>
      <Select
        value={value}
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