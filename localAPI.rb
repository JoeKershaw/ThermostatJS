require 'sinatra'
require 'sinatra/json'

  enable :sessions
  set :session_secret, 'Here be Dragons'

get '/' do
  p json session[:text]
  p session[:word]
end

post '/', :provides => :json do
    p params = JSON.parse(request.env["rack.input"].read)
    p json text = params["temperature"]
    session[:text] = text
    session[:word] = "Hello"
  redirect ('/')
end
