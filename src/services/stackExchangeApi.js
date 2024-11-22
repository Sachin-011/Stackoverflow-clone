import axios from 'axios';
import qs from 'qs';

const api = axios.create({
  baseURL: 'https://api.stackexchange.com/2.3',
  paramsSerializer: {
    serialize: params => qs.stringify(params, { arrayFormat: 'brackets' })
  }
});

export const fetchQuestions = async (tab = 'active', page = 1, tags = '') => {
  try {
    const response = await api.get('/questions', {
      params: {
        page,
        pagesize: 15,
        order: 'desc',
        sort: getSortByTab(tab),
        site: 'stackoverflow',
        filter: '!nKzQURF6Y5',
        tagged: tags
      }
    });

    return {
      items: response.data.items || [],
      has_more: response.data.has_more || false,
      error: null
    };
  } catch (error) {
    const errorMessage = error.response?.data?.error_message || 'Failed to fetch questions';
    return {
      items: [],
      has_more: false,
      error: errorMessage
    };
  }
};

const getSortByTab = (tab) => {
  const sortMap = {
    interesting: 'hot',
    bountied: 'featured',
    hot: 'hot',
    week: 'week',
    month: 'month',
    newest: 'creation',
    votes: 'votes'
  };
  return sortMap[tab] || 'activity';
};