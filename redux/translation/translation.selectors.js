import { createSelector } from 'reselect';

const selectLanguage = state => state.translation.language;

import { EN_MESSAGES as englishMessages } from './messages/EN';
import { ES_MESSAGES as spanishMessages } from './messages/ES';

export const selectMessages = componentName =>
  createSelector(
    [selectLanguage],
    language => {
    	switch (language){
    		case 'EN':
    			console.log(englishMessages.SERVICES.SEO);
    			return englishMessages[componentName];
			case 'ES':
    			return spanishMessages[componentName];
			default:
    			return englishMessages[componentName];
    	}
    }
);

  export const selectServiceMessages = service =>
  createSelector(
    [selectLanguage],
    language => {
    	switch (language){
    		case 'EN':
    			return englishMessages.SERVICES[service];
			case 'ES':
    			return spanishMessages.SERVICES[service];
			default:
    			return englishMessages.SERVICES[service];
    	}
    }
);