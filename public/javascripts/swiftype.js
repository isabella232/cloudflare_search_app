// TODO: change to use cloudflare/loader, it's probably smaller
// FIXME: have to figure out how to use imports
CloudFlare.define("swiftype_search", ["swiftype_search/config", "cloudflare/jquery1.9"],
                  function(config, $) {
                    var addSwiftype = function(engineKey) {
                      window.Swiftype = window.Swiftype || {};
                      window.Swiftype.key = engineKey;

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
                                if (data.engine_key) {
                                  addSwiftype(data.engine_key);
                                }
                              });
                  }
);
