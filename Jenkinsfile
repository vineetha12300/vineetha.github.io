pipeline {
     agent any
     stages {
         stage("Install") {
             steps {
                 echo 'Installing yarn packages'
                 sh "sudo yarn install"
             }
         }
        stage("Fetch Data") {
            steps {
                echo 'Fetching Git Data'
                sh "sudo node git_data_fetcher.js"
            }
        }
        stage("Build") {
            steps {
                echo 'Preparing Production build'
                sh "sudo yarn build"
            }
        }
        stage("Deploy") {
            steps {
                echo 'Deploying to Server'
                sh "sudo rm -rf /var/www/ParitaAkoliya"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/ParitaAkoliya/"
            }
        }
    }
    post {
      always {
        dir("${env.WORKSPACE}@tmp") {
          deleteDir()
        }
        dir("${env.WORKSPACE}@script") {
          deleteDir()
        }
        dir("${env.WORKSPACE}@script@tmp") {
          deleteDir()
        }
      }
    }
}
