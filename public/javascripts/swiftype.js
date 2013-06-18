// TODO: change to use cloudflare/loader, it's probably smaller
Cloudflare.define("swiftype", ["swiftype/config", "cloudflare/jquery1.9"],
                  function(config, $) {
                    var addSwiftype = function(engineKey) {
                      var Swiftype = window.Swiftype || {};
                      Swiftype.key = engineKey;

                      var script = document.createElement('script');
                      script.type = 'text/javascript';
                      script.async = true;
                      script.src = "//swiftype.com/embed.js";

                      var head = document.getElementsByTagName('head')[0];
                      head.appendChild(script);
                    };

                    $.getJSON("https://swiftype.com/cloudflare/domains?callback=?",
                              {domain_id: config && config.domain_id},
                              function(data) {
                                if (this.data.engine_key) {
                                  addSwiftype(this.data.engine_key);
                                }
                              });
                  }
);
