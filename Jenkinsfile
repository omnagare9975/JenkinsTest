pipeline{
    agent any
    stages{
        stage('CloneTheRepo'){
            steps{
                git branch: 'main', url :'https://github.com/omnagare9975/JenkinsTest.git'
            }
            }
         stage('BuildTheDockerImage'){
             steps{
                 sh 'docker build -t nodeapp .'
                 
             }
         }
         stage('DeployonEc2'){
             steps{
                 sh '''
                     docker stop nodeapp || true
                     docker rm nodeapp || true
                     docker run -d -p 8000:8000 --name nodeapp nodeapp
                 '''
             }
         }
        
    }
}
