desc 'Bootstrap the Redmine install each time it gets deployed.'

namespace :heroku do
  task :bootstrap => :environment do
    Rake::Task["db:migrate"].invoke

    if Redmine::DefaultData::Loader::no_data?
      language = ENV['REDMINE_LANG'] || 'en'
      set_language_if_valid(language)
      Rake::Task["redmine:load_default_data"].invoke
    end
  end
end
