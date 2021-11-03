pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent1"
                    }
                    steps {
                        git url: 'https://github.com/Vladi97/Cypress-course-pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7f3ad08e-6c6e-442f-bcbd-cb3269ac5a9c  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2"
                    }
                    steps {
                        git url: 'https://github.com/Vladi97/Cypress-course-pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7f3ad08e-6c6e-442f-bcbd-cb3269ac5a9c  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent3"
                    }
                    steps {
                        git url: 'https://github.com/Vladi97/Cypress-course-pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7f3ad08e-6c6e-442f-bcbd-cb3269ac5a9c  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent4"
                    }
                    steps {
                        git url: 'https://github.com/Vladi97/Cypress-course-pipeline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 7f3ad08e-6c6e-442f-bcbd-cb3269ac5a9c  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}