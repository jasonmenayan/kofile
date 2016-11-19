# Kofile Challenge

To install:

```
git clone https://github.com/jasonmenayan/kofile.git
cd kofile
npm install
```

## Challenge 1

To execute:

`node fees.js`

## Challenge 2

To execute:

`node distributions.js`

## Challenge 3

To start server:

`node api.js`

Then access either of the endpoints. 

*Fees*: [http://localhost:8080/fees?orders=[JSON array of orders]](http://localhost:8080/fees?orders=[{"order_date":"1/11/2015","order_number":"20150111000001","order_items":[{"type":"Real Property Recording","pages":3},{"type":"Real Property Recording","pages":1}]},{"order_date":"1/17/2015","order_number":"20150117000001","order_items":[{"type":"Real Property Recording","pages":2},{"type":"Real Property Recording","pages":20}]},{"order_date":"1/18/2015","order_number":"20150118000001","order_items":[{"type":"Real Property Recording","pages":5},{"type":"Birth Certificate","pages":1}]},{"order_date":"1/23/2015","order_number":"20150123000001","order_items":[{"type":"Birth Certificate","pages":1},{"type":"Birth Certificate","pages":1}]}])

*Distributions*: [http://localhost:8080/distributions?orders=[JSON array of orders]](http://localhost:8080/distributions?orders=[{"order_date":"1/11/2015","order_number":"20150111000001","order_items":[{"type":"Real Property Recording","pages":3},{"type":"Real Property Recording","pages":1}]},{"order_date":"1/17/2015","order_number":"20150117000001","order_items":[{"type":"Real Property Recording","pages":2},{"type":"Real Property Recording","pages":20}]},{"order_date":"1/18/2015","order_number":"20150118000001","order_items":[{"type":"Real Property Recording","pages":5},{"type":"Birth Certificate","pages":1}]},{"order_date":"1/23/2015","order_number":"20150123000001","order_items":[{"type":"Birth Certificate","pages":1},{"type":"Birth Certificate","pages":1}]}])

**Node v6 required**. If using v4, please add the `--harmony` flag:

`node --harmony ...`

