import request from '@/utils/request';

const feature = 'reward';

export function search(data) {
  return request({
    url: `/${feature}/search`,
    method: 'post',
    data
  })
}


