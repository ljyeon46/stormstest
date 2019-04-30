/* 실제로는 데이터 베이스에 있는 고객 정보를 불러오는 형태로 개발 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id':1,
            'image': 'https://placeimg.com/75/75/people',
            'name':'이한별',
            'birthday':'961222',
            'gender':'여자',
            'job':'대학생'
          },
          {
            'id':2,
            'image': 'https://placeimg.com/75/75/people?t=1556513131510',
            'name':'이순신',
            'birthday':'040115',
            'gender':'남자',
            'job':'장군'
          },
          {
            'id':3,
            'image': 'https://placeimg.com/75/75/people?t=1556513140054',
            'name':'김구',
            'birthday':'910206',
            'gender':'남자',
            'job':'교사'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
