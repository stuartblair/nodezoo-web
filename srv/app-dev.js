require('..')(
    {
      hapi: { port: 8000 },
      folder: __dirname+'/..',
      seneca: {}
    },
    fail,
    function(server){
      server.route({
        method: 'GET',
        path: '/ping',
        handler: function (request, reply) {
          reply('ping!:' + new Date().toUTCString());
        }
      });

      server.seneca
        .repl(43000)
        .listen(44000)
        .add('role:search,cmd:search',function(msg,done){
          done(null,{items:[{
            name:'foo',
            version:'0.0.0'
          }]})
        })

      .add('role:info,cmd:get',function(msg,done){
        done(null,{npm:{
          name:'foo',
          version:'0.0.0'
        }})
      })

      .add('role:web,cmd:ping', function(msg, done) {
        done(null, {ping: new Date().toUTCString()})
      })

      .ready(function(){
        server.seneca.log.info('hapi',server.info)
          server.start(fail)
      })
    })


function fail(err) {
  if( err ) {
    console.log( err )
      process.exit(1)
  }
}
