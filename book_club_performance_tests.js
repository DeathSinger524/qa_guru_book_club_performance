import http from 'k6/http';
import { sleep, check } from 'k6';

let base_url = 'https://book-club.qa.guru';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  let res = http.get(base_url + '/api/v1/clubs/?page=1&page_size=10');
  check(res, { "status is 200": (res) => res.status === 200 });
  sleep(1);
}