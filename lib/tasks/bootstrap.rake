desc 'Bootstrap the Redmine install each time it gets deployed.'

namespace :heroku do
  task :bootstrap => :environment do

    Rake::Task["db:migrate"].invoke

    if !Role.where(:builtin => 0).exists? &&
        !Tracker.exists? &&
        !IssueStatus.exists? &&
        !Enumeration.exists?
      Rake::Task["redmine:load_default_data"].invoke
    end

  end
end
