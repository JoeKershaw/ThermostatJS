require 'sinatra'
require 'sinatra/json'


class LocalAPI < Sinatra::Base
  enable :sessions
  set :session_secret, 'Here be Dragons'

get '/' do
  erb :index
end

post '/data' do
    params = JSON.parse(request.body.read)
    text = params["temperature"]
    session[:text] = text
end

get '/data' do
  json text: session[:text]
end

run! if app_file == $0
end
