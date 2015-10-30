require 'sinatra/base'

class Index < Sinatra::Base

  set :public_folder, File.expand_path(
    File.join(root, '..', 'public')
  )

  get '/' do
    erb :index
  end

end
