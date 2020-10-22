# KESTI Frontend (Vue.js + Spring Boot) Boilerplate
### Description
{} 안에 있는 내용 수정 필요
```yaml
...
---
server:
  port: {local-port}
spring:
  profiles: local
...
api:
  url: http://{host}:{port}
---
[위 local profiles와 마찬가지로 설정 필요]
server:
  port: {dev-port}
spring:
  profiles: dev
  ...
...
```