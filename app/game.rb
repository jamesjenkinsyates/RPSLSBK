class Game

  include DataMapper::Resource

  property :id, Serial
  # property :winnerID, 
  property :player1, String
  property :player2, String
  property :player1_pick, String
  # property :loserID, 
  property :player2_pick, String
  property :winner, String

end
