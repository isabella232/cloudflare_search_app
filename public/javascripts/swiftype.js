CloudFlare.define("swiftype_search", ["swiftype_search/config"],
                  function(config) {
                    if (config === undefined || config === null || config.engine_key === undefined) {
                      return;
                    }

                    window.Swiftype = window.Swiftype || {};
                    window.Swiftype.key = config.engine_key;

                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.async = true;
                    script.src = "//swiftype.com/embed.js";

                    var head = document.getElementsByTagName('head')[0];
                    head.appendChild(script);
                  }
);
