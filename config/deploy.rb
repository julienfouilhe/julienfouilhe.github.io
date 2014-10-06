# config valid only for Capistrano 3.1
lock '3.1.0'

set :application, 'Personal-website'
set :repo_url, 'git@gitlab.fouilhe.fr:julien/website.git'
set :use_sudo, false

set :deploy_to, '/home/deploy/julien'

set :linked_dirs, %w{log node_modules app/bower_components}

set :ssh_options, { :forward_agent => false }

namespace :deploy do

  desc 'Install node.js dependencies'
  task :install do
    on roles(:app), in: :sequence do
      within release_path do
        execute :npm, "install 2> log/npm-install.log"
	execute :npm, "install grunt 2> log/npm-install-grunt.log"
	execute :bower, "install 2> log/bower-install.log"
	execute :grunt, "build"
      end
    end
  end

  after :publishing, :install
end
