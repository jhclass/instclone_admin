## '관리자'를 위한 웹사이트

Nextjs, typescript, jest 를 베이스로 구축합니다.<br/>
Next 와 jest 최신버전으로 setup을 준비하였습니다. (2023.08.22)<br/>
next_typescript_jest_setup 을 이용하세요<br/>

## 프로젝트의 마무리

Wep/App 을 통해 사용자는 콘텐츠를 생성하고 관리하며 사용자간 대화를 합니다.<br/>
사용자가 업로드한 이미지 , 텍스트 등 콘텐츠는 apollo/graphql을 통해 postgreSQL에 저장됩니다.<br/>
데이터베이스에는 경로와 텍스트만 저장되고 이미지,영상은 AWS S3 에 저장됩니다.<br/><br>
그리고 마지막으로 사용자의 데이터를 관리하고 분석하며 직접적으로 소통이 가능한 관리자 전용 웹사이트를 끝으로 프로젝트를 마무리 합니다.<br/><br>
모든 프로젝트는 지속적으로 관리되고 업데이트 될 예정입니다.<br/><br>

- (front) - instclone-front<br/>
- (back) - instarclone-backend<br/>
- (app) - react-native-master<br/>

## UX

- 사용자 ↔ instsclone-front(Web),react-native-master(app)<br/><br/>

- ↕↕↕↕↕↕↕↕↕↕↕↕<br/>

- instarclone-backend<br/><br/>

- ↕↕↕↕↕↕↕↕↕↕↕↕<br/>

- 관리자 ↔ instclone_admin<br/>
