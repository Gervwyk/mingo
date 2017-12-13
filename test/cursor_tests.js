var test = require('tape')
var Backbone = require('backbone')
var mingo = require('../dist/mingo')
var samples = require('./support')
var _ = mingo._internal()

test('Mingo.Cursor tests', function (t) {
  t.plan(5)
  // create a query with no criteria
  var query = new mingo.Query()
  var cursor = query.find(samples.simpleGradesData)
  cursor.skip(0).limit(100)
  t.ok(cursor.hasNext(), 'can peek for an item with hasNext()')
  t.ok(cursor.next(), 'can select next item with next()')
  t.ok(_.isObject(cursor.first()), 'can retrieve first item with first()')
  t.ok(_.isObject(cursor.last()), 'can retrieve last item with last()')
  t.equal(cursor.count(), 99, 'can count items with count()')
  cursor.forEach(_.isObject)
  cursor.map(_.isObject).every(_.isBoolean)
})
