require 'sinatra'

configure :production do
  require 'newrelic_rpm'
end

get '/' do 
  erb :index2
end

post '/write' do
  Game.create(
    player1: params[:player1],
    player2: params[:player2],
    player1_pick: params[:player1Pick],
    player2_pick: params[:player2Pick],
    winner: params[:winner]
  )
  return 'success'
end