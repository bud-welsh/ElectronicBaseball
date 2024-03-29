/*
  This is the script for League Average Baseball
  By Bud Welsh
*/

/*
There are 25 different numeric codes to describe
             the type of event.  They are:

          Code Meaning

          0    Unknown event
          1    No event
          2    Generic out
          3    Strikeout
          4    Stolen base
          5    Defensive indifference
          6    Caught stealing
          7    Pickoff error
          8    Pickoff
          9    Wild pitch
          10   Passed ball
          11   Balk
          12   Other advance
          13   Foul error
          14   Walk
          15   Intentional walk
          16   Hit by pitch
          17   Interference
          18   Error
          19   Fielder's choice
          20   Single
          21   Double
          22   Triple
          23   Home run
          24   Missing play
*/

//Variables
/*
  inning = 1.0;
  outs = 0;
  runsVisitor = 0;
  runsHome = 0;
  hitsVisitor = 0;
  hitsHome = 0;
  errorsVisitor = 0;
  errorsHome = 0;
*/

// Psudocode
// while or if inning < 9.5 and runsVisitor != runsHome
// while outs < 3
// Listen for Play click
// Get Random Number
// Assign play to random number
// Move runners if needed
// Move batter if needed
// Add runs to total if needed
