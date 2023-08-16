pipeline {
    agent any
    environment {
        IMAGE_NAME = 'vkiran12/flipkart-backend'       // Replace with your Docker image name
        TAG = 'testing-v1'                           // Replace with your desired tag/version
    }

    stages {
        stage('Checkout') {
          steps {
            checkout scm
          }
        }

        stage('Build') {
          steps {
            withCredentials([usernamePassword(credentialsId: 'docker-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
          sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
            }
            sh 'docker buildx build -t ${IMAGE_NAME}:${TAG} .'
            sh 'docker push ${IMAGE_NAME}:${TAG}'
            sh 'docker rmi ${IMAGE_NAME}:${TAG}'
          }
        }

        stage('Deploy') {
      steps {
      //    script {
      //           def remote = [:]
      //           remote.name = 'devops-project'
      //           remote.host = '99.79.62.126'
      //           remote.knownHosts = '/var/jenkins_home/.ssh/known_hosts'
      //           remote.user = 'devops'
      //               sshagent(credentials: ['devops-user-pass'], verbose: true) {
      //                   sshCommand remote: remote, command: 'cd /home/ubuntu/flipkart-backend; echo "Inside Server"; bash deploy.sh;'
      //               }
      //           }
      // }
          script {
            def remoteServer = [:]
        remoteServer.name = 'devops-project'
        remoteServer.host = '99.79.62.126'
        remoteServer.user = 'devops'
        remoteServer.allowAnyHosts = true
        remoteServer.password = 'DevOps@1234'

        sshCommand remote: remoteServer, command: '''
          #!/bin/bash
          echo "Hello from remote server!"
          echo 'DevOps@1234' | sudo -S su ubuntu
          cd /home/ubuntu/flipkart-backend
          bash deploy.sh
          # Add your script commands here
        '''
          }
          }
        }
    }
}
