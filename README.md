# Minesweeper_cricket
1 ABOUTGAME

 The game is mixture of cricket and minesweeper. It involves a 10X10 grid
 consisting of 100 blocks . There are 11 fielders distributed randomly on the
 given grid anf rest of the grid randomly distributed runs. There are two players
 in the game who plays turn by turn by clicking on any random block and each
 player have 3 lives. If any player selects the block which has fielder on it then it
 loses its one live . Once all lives of both players are over then the final result of
 the game is displayed also the highest score by any players is saved and if any
 player breaks that record then that score will get updated and also showing the
 name of the player who scored it.
 
 2 BRIEFDESCRIPTIONABOUTEACHPART
 OF THE GAME
 
 2.1 TITLE
 It displays the name of the game that is Minesweeper Cricket.
 
 2.2 HIGHEST SCORE
 It displays the highest score by the any player and records it till any other player
 breaks it.
 
 2.3 LEADER BOARD
 It shows up at the end of the game and displayed which player has won the
 game based on their scores.
 
 2.4 MAIN BODY
 It is the region where the game is actually played . It consist of blocks and
 players can select any box randomly .After a player clicks any block an image
 is displayed showing the output.
 Fielder is shown by an image of stumps.
 Runs are shown by image of particular runs that 1 ,2 and 6 . The images
 of player 1 are red coloured while that of other is yellow coloured.
 Tags of players lives and scores On the background image the player’s
 scores and lives are displayed . Player 1 is present in the left side coloured red
 and player 2 is on right side coloured yellow.

 2.5 RESTART BUTTON
 As the name suggest on clicking it the game starts again from the beginning
 setting the scores of the players as zero and lives as 3.
 
 3 LISTOFFUNCTIONSUSED:-Briefdescrip
tion of each function

 1-Random Fielder Generation (): Generating random positions for fielders
 on the game board.
 
 2-Game Board Rendering (): Rendering the game board by dynamically
 creating and appending block elements to the game board container.
 
 3-Block Click Event Handling (event): Handling the click event on the
 game blocks and executing appropriate actions based on the game logic.
 
 4-Score Increment (player,run): Incrementing the score of the current player
 based on the run value obtained from clicking a non-fielder block.
 
 5-Lives Decrement (player): Decreasing the lives count of the current player
 when a fielder block is clicked.
 
 6-Player Switching (): Switching the turn between Player 1 and Player 2
 after each block click.
 
 7-Game End Check (): Checking if the game end conditions are met (both
 players have zero lives) and triggering the end of the game.
 
 8-Game Ending (): Executing the necessary actions to end the game, such as
 removing event listeners and displaying the winner or tie message.
 
 9-Game Restart (): Resetting the game to its initial state when the restart
 button is clicked.
 
 10-Random Run Generation (): Generating a random run value (1, 4, or 6)
 to be assigned to a non-fielder block when clicked.
 
 11-Game Initialization (): Initializing the game by rendering the board,
 setting initial scores, lives, and event listeners.
 
 12-Game Start (): Calling the init() function to start the game.

4 CUSTOMIZATION

 1-Multiplayer : The game is played by two players instead of one.
 
 2-Highest Score : The game displays the highest score by any individual
 player and it gets updated when it is broken.
 
 3-Leader board : After the game ends the leader board shows who is the
 winner of the game.
 
 4-Visual effects : Added a full background image of a stadium which cov
ers the full page and added another background image on which the grid is
 present on which the game is to be played

<img width="361" alt="image" src="https://github.com/Nitsinghtomar/Minesweeper_cricket/assets/134151806/60f3dfcd-8a6b-46a5-a596-86fa52bf0f6e">


 
