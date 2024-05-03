const END_POINT = {
  AUTH: {
    LOGIN: '/auth/login',
    GET_ME: '/user/me',
  },
  INVOICE: {
    LIST: '/invoices/list',
    DETAIL: (id) => `/invoices/detail/${id}`,
    CREATE: '/invoices/create',
    EDIT: '/product/edit',
  },
  PRODUCT: {
    LIST: '/product/list',
    DETAIL: (id) => `/product/detail/${id}`,
    CREATE: '/product/create',
    CREATE_LIST: '/product/create/list',
    EDIT: (id) => `/product/edit/${id}`,
    DELETE_LIST: '/product/delete/list',
    DELETE: (id) => `/product/delete/${id}`,
  },
  COMPANY: {
    LIST: '/company/list',
    DETAIL: (id) => `/company/detail/${id}`,
    CREATE: '/company/create',
    CREATE_LIST: '/company/create/list',
    EDIT: (id) => `/company/edit/${id}`,
    DELETE_LIST: '/company/delete/list',
    DELETE: (id) => `/company/delete/${id}`,
  },
  COUNTRY: {
    LIST: '/country/list',
    DETAIL: (id) => `/country/detail/${id}`,
    CREATE: '/country/create',
    CREATE_LIST: '/country/create/list',
    EDIT: (id) => `/country/edit/${id}`,
    DELETE_LIST: '/country/delete/list',
    DELETE: (id) => `/country/delete/${id}`,
  },
  MANAGER: {
    LIST: '/manager/list',
    DETAIL: (id) => `/manager/detail/${id}`,
    CREATE: '/manager/create',
    CREATE_LIST: '/manager/create/list',
    EDIT: (id) => `/manager/edit/${id}`,
    DELETE_LIST: '/manager/delete/list',
    DELETE: (id) => `/manager/delete/${id}`,
  },
  USER: {
    LIST: '/user/list',
    DETAIL: (id) => `/user/detail/${id}`,
    CREATE: '/user/create',
    CREATE_LIST: '/user/create/list',
    EDIT: (id) => `/user/edit/${id}`,
    DELETE_LIST: '/user/delete/list',
    DELETE: (id) => `/user/delete/${id}`,
  },
};

export default END_POINT;
