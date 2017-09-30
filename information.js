/*

Authentication
-------------------

Cookies vs Tokens

Identified piece of informatin can be included by either cookies or by manually
set tokens. Cookies are somewhat easier to implement, because they are automatically
included on all requests. They are unique to each domain, and cannot be sent to
different domains. Tokens have to manually be wired up, but they can be sent to any
domain. One aproach can be more iseful than the other in different situations.
For example, if we are building a distributed system for our application, it will consist
of many servers, hosted on many different domains. That would be the use case for a token,
because we want the user to be authentiacted on all domains. With cookies, we are
restricted to a single domain. Tokens are industry trending so lets use em ^_^.

** app architecture graph (61) & explanation
    mobile app + we app architecture

** scaling architecture (61)

morgan is the logging framework
mostly used for debugging in this case


*/
