function autoReply() {
 var mail = "soccer030819@gmail.com";  //メールアドレスの指定
 var sheet = SpreadsheetApp.getActiveSheet();  //スプレットシート情報を取得
 var row = sheet.getLastRow();  //最終行の取得
 var day = sheet.getRange(row, 2).getValue();  //シートの最終行,２列目（日付情報）を変数dayに代入
 var game_name = sheet.getRange(row, 3).getValue();  //試合名
 var Home_team = sheet.getRange(row, 4).getValue();  //ホームチーム名
 var Away_team = sheet.getRange(row, 5).getValue();  //アウェイチーム名
 var spaceSeparator = /\s+/;  //スペースで文字列を分割するための変数指定
 var slashSeparator = "/";  //スラッシュで文字列を分割するための変数指定  

//得点者情報
  //ホーム得点者情報
 var H_scoreGetters1 = sheet.getRange(row, 6).getValue();  //1Q
 var H_scoreGetters2 = sheet.getRange(row, 7).getValue();  //2Q
 var H_scoreGetters3 = sheet.getRange(row, 8).getValue();  //3Q
 var H_scoreGetters4 = sheet.getRange(row, 9).getValue();  //4Q
  //アウェイ得点者情報
 var A_scoreGetters1 = sheet.getRange(row, 10).getValue();  //1Q
 var A_scoreGetters2 = sheet.getRange(row, 11).getValue();  //2Q
 var A_scoreGetters3 = sheet.getRange(row, 12).getValue();  //3Q
 var A_scoreGetters4 = sheet.getRange(row, 13).getValue();  //4Q

  
//スコア
  //ホーム
 var H_score1 = sheet.getRange(row, 14).getValue();  //入力されたスコア情報を取得
  var H_scores1 = H_score1.split(slashSeparator);  //H_score1の文字列をスラッシュで区切り配列として変数H_scores1に代入
   var H_score1_AT = parseFloat(H_scores1[0]);  //配列の1番目の要素をFloat型に変換し変数H_score1_ATに代入
   var H_score1_MF = parseFloat(H_scores1[1]);  //配列の2番目も同様
   var H_score1_DF = parseFloat(H_scores1[2]);  //配列の3番目も同様
   var H_score1_total = H_score1_AT + H_score1_MF + H_score1_DF;  //配列の要素全ての合計値を計算＝1Qホームの合計スコア
   
 var H_score2 = sheet.getRange(row, 15).getValue();
  var H_scores2 = H_score2.split(slashSeparator);
   var H_score2_AT = parseFloat(H_scores2[0])
   var H_score2_MF = parseFloat(H_scores2[1])
   var H_score2_DF = parseFloat(H_scores2[2])
   var H_score2_total = H_score2_AT + H_score2_MF + H_score2_DF
   
 var H_score3 = sheet.getRange(row, 16).getValue();
  var H_scores3 = H_score3.split(slashSeparator);
   var H_score3_AT = parseFloat(H_scores3[0])
   var H_score3_MF = parseFloat(H_scores3[1])
   var H_score3_DF = parseFloat(H_scores3[2])
   var H_score3_total = H_score3_AT + H_score3_MF + H_score3_DF
   
 var H_score4 = sheet.getRange(row, 17).getValue();
  var H_scores4 = H_score4.split(slashSeparator);
   var H_score4_AT = parseFloat(H_scores4[0])
   var H_score4_MF = parseFloat(H_scores4[1])
   var H_score4_DF = parseFloat(H_scores4[2])
   var H_score4_total = H_score4_AT + H_score4_MF + H_score4_DF
   
   
 var H_totalScore_AT = H_score1_AT + H_score2_AT + H_score3_AT + H_score4_AT  //1〜4QのATの合計
 var H_totalScore_MF = H_score1_MF + H_score2_MF + H_score3_MF + H_score4_MF 
 var H_totalScore_DF = H_score1_DF + H_score2_DF + H_score3_DF + H_score4_DF
 var H_totalScore = H_score1_total + H_score2_total + H_score3_total + H_score4_total  //1〜4のトータルスコア
  
 //アウェイ
 var A_score1 = sheet.getRange(row, 18).getValue();
  var A_scores1 = A_score1.split(slashSeparator);
   var A_score1_AT = parseFloat(A_scores1[0])
   var A_score1_MF = parseFloat(A_scores1[1])
   var A_score1_DF = parseFloat(A_scores1[2])
   var A_score1_total = A_score1_AT + A_score1_MF + A_score1_DF
   
 var A_score2 = sheet.getRange(row, 19).getValue();
  var A_scores2 = A_score2.split(slashSeparator);
   var A_score2_AT = parseFloat(A_scores2[0])
   var A_score2_MF = parseFloat(A_scores2[1])
   var A_score2_DF = parseFloat(A_scores2[2])
   var A_score2_total = A_score2_AT + A_score2_MF + A_score2_DF
   
 var A_score3 = sheet.getRange(row, 20).getValue();
  var A_scores3 = A_score3.split(slashSeparator);
   var A_score3_AT = parseFloat(A_scores3[0])
   var A_score3_MF = parseFloat(A_scores3[1])
   var A_score3_DF = parseFloat(A_scores3[2])
   var A_score3_total = A_score3_AT + A_score3_MF + A_score3_DF
   
 var A_score4 = sheet.getRange(row, 21).getValue();
  var A_scores4 = A_score4.split(slashSeparator);
   var A_score4_AT = parseFloat(A_scores4[0])
   var A_score4_MF = parseFloat(A_scores4[1])
   var A_score4_DF = parseFloat(A_scores4[2])
   var A_score4_total = A_score4_AT + A_score4_MF + A_score4_DF

 var A_totalScore_AT = A_score1_AT + A_score2_AT + A_score3_AT + A_score4_AT
 var A_totalScore_MF = A_score1_MF + A_score2_MF + A_score3_MF + A_score4_MF
 var A_totalScore_DF = A_score1_DF + A_score2_DF + A_score3_DF + A_score4_DF   
 var A_totalScore = A_score1_total + A_score2_total + A_score3_total + A_score4_total
 
 //勝敗
 if (H_totalScore > A_totalScore) {
   var winner = Home_team + "が勝ちました";
 } else if (H_totalScore < A_totalScore){
   var winner = Away_team + "が勝ちました";
 } else {
   var winner = "引き分けです" 
   }

 //ショット
 var H_shot1 = sheet.getRange(row, 22).getValue();
  var H_shots1 = H_shot1.split(slashSeparator);
   var H_shot1_AT = parseFloat(H_shots1[0])
   var H_shot1_MF = parseFloat(H_shots1[1])
   var H_shot1_DF = parseFloat(H_shots1[2])
   var H_shot1_total = H_shot1_AT + H_shot1_MF + H_shot1_DF
   
 var H_shot2 = sheet.getRange(row, 23).getValue();
  var H_shots2 = H_shot2.split(slashSeparator);
   var H_shot2_AT = parseFloat(H_shots2[0])
   var H_shot2_MF = parseFloat(H_shots2[1])
   var H_shot2_DF = parseFloat(H_shots2[2])
   var H_shot2_total = H_shot2_AT + H_shot2_MF + H_shot2_DF
 
 var H_shot3 = sheet.getRange(row, 24).getValue();
  var H_shots3 = H_shot3.split(slashSeparator);
   var H_shot3_AT = parseFloat(H_shots3[0])
   var H_shot3_MF = parseFloat(H_shots3[1])
   var H_shot3_DF = parseFloat(H_shots3[2])
   var H_shot3_total = H_shot3_AT + H_shot3_MF + H_shot3_DF
   
 var H_shot4 = sheet.getRange(row, 25).getValue();
  var H_shots4 = H_shot4.split(slashSeparator);
   var H_shot4_AT = parseFloat(H_shots4[0])
   var H_shot4_MF = parseFloat(H_shots4[1])
   var H_shot4_DF = parseFloat(H_shots4[2])
   var H_shot4_total = H_shot4_AT + H_shot4_MF + H_shot4_DF
 
 var H_totalShot_AT = H_shot1_AT + H_shot2_AT + H_shot3_AT + H_shot4_AT
 var H_totalShot_MF = H_shot1_MF + H_shot2_MF + H_shot3_MF + H_shot4_MF
 var H_totalShot_DF = H_shot1_DF + H_shot2_DF + H_shot3_DF + H_shot4_DF
 var H_totalShot = H_shot1_total + H_shot2_total + H_shot3_total + H_shot4_total

 
 var A_shot1 = sheet.getRange(row, 26).getValue();
  var A_shots1 = A_shot1.split(slashSeparator);
   var A_shot1_AT = parseFloat(A_shots1[0])
   var A_shot1_MF = parseFloat(A_shots1[1])
   var A_shot1_DF = parseFloat(A_shots1[2])
   var A_shot1_total = A_shot1_AT + A_shot1_MF + A_shot1_DF
   
 var A_shot2 = sheet.getRange(row, 27).getValue();
  var A_shots2 = A_shot2.split(slashSeparator);
   var A_shot2_AT = parseFloat(A_shots2[0])
   var A_shot2_MF = parseFloat(A_shots2[1])
   var A_shot2_DF = parseFloat(A_shots2[2])
   var A_shot2_total = A_shot2_AT + A_shot2_MF + A_shot2_DF
 
 var A_shot3 = sheet.getRange(row, 28).getValue();
  var A_shots3 = A_shot3.split(slashSeparator);
   var A_shot3_AT = parseFloat(A_shots3[0])
   var A_shot3_MF = parseFloat(A_shots3[1])
   var A_shot3_DF = parseFloat(A_shots3[2])
   var A_shot3_total = A_shot3_AT + A_shot3_MF + A_shot3_DF
   
 var A_shot4 = sheet.getRange(row, 29).getValue();
  var A_shots4 = A_shot4.split(slashSeparator);
   var A_shot4_AT = parseFloat(A_shots4[0])
   var A_shot4_MF = parseFloat(A_shots4[1])
   var A_shot4_DF = parseFloat(A_shots4[2])
   var A_shot4_total = A_shot4_AT + A_shot4_MF + A_shot4_DF

 var A_totalShot_AT = A_shot1_AT + A_shot2_AT + A_shot3_AT + A_shot4_AT
 var A_totalShot_MF = A_shot1_MF + A_shot2_MF + A_shot3_MF + A_shot4_MF
 var A_totalShot_DF = A_shot1_DF + A_shot2_DF + A_shot3_DF + A_shot4_DF
 var A_totalShot = A_shot1_total + A_shot2_total + A_shot3_total + A_shot4_total

 //GB
 var H_GB1 = sheet.getRange(row, 30).getValue();
  var H_GBs1 = H_GB1.split(slashSeparator);
   var H_GB1_O = parseFloat(H_GBs1[0])
   var H_GB1_M = parseFloat(H_GBs1[1])
   var H_GB1_D = parseFloat(H_GBs1[2])
   var H_GB1_total = H_GB1_O + H_GB1_M + H_GB1_D
   
 var H_GB2 = sheet.getRange(row, 31).getValue();
  var H_GBs2 = H_GB2.split(slashSeparator);
   var H_GB2_O = parseFloat(H_GBs2[0])
   var H_GB2_M = parseFloat(H_GBs2[1])
   var H_GB2_D = parseFloat(H_GBs2[2])
   var H_GB2_total = H_GB2_O + H_GB2_M + H_GB2_D 
   
 var H_GB3 = sheet.getRange(row, 32).getValue();
  var H_GBs3 = H_GB3.split(slashSeparator);
   var H_GB3_O = parseFloat(H_GBs3[0])
   var H_GB3_M = parseFloat(H_GBs3[1])
   var H_GB3_D = parseFloat(H_GBs3[2])
   var H_GB3_total = H_GB3_O + H_GB3_M + H_GB3_D
   
 var H_GB4 = sheet.getRange(row, 33).getValue();
  var H_GBs4 = H_GB4.split(slashSeparator);
   var H_GB4_O = parseFloat(H_GBs4[0])
   var H_GB4_M = parseFloat(H_GBs4[1])
   var H_GB4_D = parseFloat(H_GBs4[2])
   var H_GB4_total = H_GB4_O + H_GB4_M + H_GB4_D
   
 var H_totalGB_O = H_GB1_O + H_GB2_O + H_GB3_O + H_GB4_O
 var H_totalGB_M = H_GB1_M + H_GB2_M + H_GB3_M + H_GB4_M
 var H_totalGB_D = H_GB1_D + H_GB2_D + H_GB3_D + H_GB4_D
 var H_totalGB = H_GB1_total + H_GB2_total + H_GB3_total + H_GB4_total   
 

 var A_GB1 = sheet.getRange(row, 34).getValue();
  var A_GBs1 = A_GB1.split(slashSeparator);
   var A_GB1_O = parseFloat(A_GBs1[0])
   var A_GB1_M = parseFloat(A_GBs1[1])
   var A_GB1_D = parseFloat(A_GBs1[2])
   var A_GB1_total = A_GB1_O + A_GB1_M + A_GB1_D
   
 var A_GB2 = sheet.getRange(row, 35).getValue();
  var A_GBs2 = A_GB2.split(slashSeparator);
   var A_GB2_O = parseFloat(A_GBs2[0])
   var A_GB2_M = parseFloat(A_GBs2[1])
   var A_GB2_D = parseFloat(A_GBs2[2])
   var A_GB2_total = A_GB2_O + A_GB2_M + A_GB2_D 
   
 var A_GB3 = sheet.getRange(row, 36).getValue();
  var A_GBs3 = A_GB3.split(slashSeparator);
   var A_GB3_O = parseFloat(A_GBs3[0])
   var A_GB3_M = parseFloat(A_GBs3[1])
   var A_GB3_D = parseFloat(A_GBs3[2])
   var A_GB3_total = A_GB3_O + A_GB3_M + A_GB3_D
   
 var A_GB4 = sheet.getRange(row, 37).getValue();
  var A_GBs4 = A_GB4.split(slashSeparator);
   var A_GB4_O = parseFloat(A_GBs4[0])
   var A_GB4_M = parseFloat(A_GBs4[1])
   var A_GB4_D = parseFloat(A_GBs4[2])
   var A_GB4_total = A_GB4_O + A_GB4_M + A_GB4_D
   
 var A_totalGB_O = A_GB1_O + A_GB2_O + A_GB3_O + A_GB4_O
 var A_totalGB_M = A_GB1_M + A_GB2_M + A_GB3_M + A_GB4_M
 var A_totalGB_D = A_GB1_D + A_GB2_D + A_GB3_D + A_GB4_D
 var A_totalGB = A_GB1_total + A_GB2_total + A_GB3_total + A_GB4_total   
 
 var GB_total1 = H_GB1_total + A_GB1_total
 var GB_total2 = H_GB2_total + A_GB2_total
 var GB_total3 = H_GB3_total + A_GB3_total
 var GB_total4 = H_GB4_total + A_GB4_total
 var GB_total = H_totalGB + A_totalGB
 
 var GB_chance_ASide1 = H_GB1_O + A_GB1_D
 var GB_chance_ASide2 = H_GB2_O + A_GB2_D
 var GB_chance_ASide3 = H_GB3_O + A_GB3_D
 var GB_chance_ASide4 = H_GB4_O + A_GB4_D
 var GB_chance_ASideTotal = GB_chance_ASide1 + GB_chance_ASide2 + GB_chance_ASide3 + GB_chance_ASide4
 
 var GB_chance_MSide1 = H_GB1_M + A_GB1_M
 var GB_chance_MSide2 = H_GB2_M + A_GB2_M
 var GB_chance_MSide3 = H_GB3_M + A_GB3_M
 var GB_chance_MSide4 = H_GB4_M + A_GB4_M
 var GB_chance_MSideTotal = GB_chance_MSide1 + GB_chance_MSide2 + GB_chance_MSide3 + GB_chance_MSide4

 var GB_chance_HSide1 = A_GB1_O + H_GB1_D
 var GB_chance_HSide2 = A_GB2_O + H_GB2_D
 var GB_chance_HSide3 = A_GB3_O + H_GB3_D
 var GB_chance_HSide4 = A_GB4_O + H_GB4_D
 var GB_chance_HSideTotal = GB_chance_HSide1 + GB_chance_HSide2 + GB_chance_HSide3 + GB_chance_HSide4
  

 //TO
 var H_TO1 = sheet.getRange(row, 38).getValue();
  var H_TOs1 = H_TO1.split(slashSeparator);
   var H_TO1_P = parseFloat(H_TOs1[0])
   var H_TO1_B = parseFloat(H_TOs1[1])
   var H_TO1_S = parseFloat(H_TOs1[2])
   var H_TO1_total = H_TO1_P + H_TO1_B + H_TO1_S
   
 var H_TO2 = sheet.getRange(row, 39).getValue();
  var H_TOs2 = H_TO2.split(slashSeparator);
   var H_TO2_P = parseFloat(H_TOs2[0])
   var H_TO2_B = parseFloat(H_TOs2[1])
   var H_TO2_S = parseFloat(H_TOs2[2])
   var H_TO2_total = H_TO2_P + H_TO2_B + H_TO2_S
 
 var H_TO3 = sheet.getRange(row, 40).getValue();
  var H_TOs3 = H_TO3.split(slashSeparator);
   var H_TO3_P = parseFloat(H_TOs3[0])
   var H_TO3_B = parseFloat(H_TOs3[1])
   var H_TO3_S = parseFloat(H_TOs3[2])
   var H_TO3_total = H_TO3_P + H_TO3_B + H_TO3_S
   
 var H_TO4 = sheet.getRange(row, 41).getValue();
  var H_TOs4 = H_TO4.split(slashSeparator);
   var H_TO4_P = parseFloat(H_TOs4[0])
   var H_TO4_B = parseFloat(H_TOs4[1])
   var H_TO4_S = parseFloat(H_TOs4[2])
   var H_TO4_total = H_TO4_P + H_TO4_B + H_TO4_S
 
 var H_totalTO_P = H_TO1_P + H_TO2_P + H_TO3_P + H_TO4_P
 var H_totalTO_B = H_TO1_B + H_TO2_B + H_TO3_B + H_TO4_B
 var H_totalTO_S = H_TO1_S + H_TO2_S + H_TO3_S + H_TO4_S
 var H_totalTO = H_TO1_total + H_TO2_total + H_TO3_total + H_TO4_total

 
 var A_TO1 = sheet.getRange(row, 42).getValue();
  var A_TOs1 = A_TO1.split(slashSeparator);
   var A_TO1_P = parseFloat(A_TOs1[0])
   var A_TO1_B = parseFloat(A_TOs1[1])
   var A_TO1_S = parseFloat(A_TOs1[2])
   var A_TO1_total = A_TO1_P + A_TO1_B + A_TO1_S
   
 var A_TO2 = sheet.getRange(row, 43).getValue();
  var A_TOs2 = A_TO2.split(slashSeparator);
   var A_TO2_P = parseFloat(A_TOs2[0])
   var A_TO2_B = parseFloat(A_TOs2[1])
   var A_TO2_S = parseFloat(A_TOs2[2])
   var A_TO2_total = A_TO2_P + A_TO2_B + A_TO2_S
 
 var A_TO3 = sheet.getRange(row, 44).getValue();
  var A_TOs3 = A_TO3.split(slashSeparator);
   var A_TO3_P = parseFloat(A_TOs3[0])
   var A_TO3_B = parseFloat(A_TOs3[1])
   var A_TO3_S = parseFloat(A_TOs3[2])
   var A_TO3_total = A_TO3_P + A_TO3_B + A_TO3_S
   
 var A_TO4 = sheet.getRange(row, 45).getValue();
  var A_TOs4 = A_TO4.split(slashSeparator);
   var A_TO4_P = parseFloat(A_TOs4[0])
   var A_TO4_B = parseFloat(A_TOs4[1])
   var A_TO4_S = parseFloat(A_TOs4[2])
   var A_TO4_total = A_TO4_P + A_TO4_B + A_TO4_S
 
 var A_totalTO_P = A_TO1_P + A_TO2_P + A_TO3_P + A_TO4_P
 var A_totalTO_B = A_TO1_B + A_TO2_B + A_TO3_B + A_TO4_B
 var A_totalTO_S = A_TO1_S + A_TO2_S + A_TO3_S + A_TO4_S
 var A_totalTO = A_TO1_total + A_TO2_total + A_TO3_total + A_TO4_total

 //CTO
 var H_CTO1 = sheet.getRange(row, 46).getValue();
  var H_CTOs1 = H_CTO1.split(slashSeparator);
   var H_CTO1_PorC = parseFloat(H_CTOs1[0])
   var H_CTO1_PC = parseFloat(H_CTOs1[1])
   var H_CTO1_total = H_CTO1_PorC + H_CTO1_PC
  
 var H_CTO2 = sheet.getRange(row, 47).getValue();
  var H_CTOs2 = H_CTO2.split(slashSeparator);
   var H_CTO2_PorC = parseFloat(H_CTOs2[0])
   var H_CTO2_PC = parseFloat(H_CTOs2[1])
   var H_CTO2_total = H_CTO2_PorC + H_CTO2_PC
  
 var H_CTO3 = sheet.getRange(row, 48).getValue();
  var H_CTOs3 = H_CTO3.split(slashSeparator);
   var H_CTO3_PorC = parseFloat(H_CTOs3[0])
   var H_CTO3_PC = parseFloat(H_CTOs3[1])
   var H_CTO3_total = H_CTO3_PorC + H_CTO3_PC
   
 var H_CTO4 = sheet.getRange(row, 49).getValue();
  var H_CTOs4 = H_CTO4.split(slashSeparator);
   var H_CTO4_PorC = parseFloat(H_CTOs4[0])
   var H_CTO4_PC = parseFloat(H_CTOs4[1])
   var H_CTO4_total = H_CTO4_PorC + H_CTO4_PC
  
 var H_totalCTO_PorC = H_CTO1_PorC + H_CTO2_PorC + H_CTO3_PorC + H_CTO4_PorC
 var H_totalCTO_PC = H_CTO1_PC + H_CTO2_PC + H_CTO3_PC + H_CTO4_PC
 var H_totalCTO = H_CTO1_total + H_CTO2_total + H_CTO3_total + H_CTO4_total
 
 
 var A_CTO1 = sheet.getRange(row, 50).getValue();
  var A_CTOs1 = A_CTO1.split(slashSeparator);
   var A_CTO1_PorC = parseFloat(A_CTOs1[0])
   var A_CTO1_PC = parseFloat(A_CTOs1[1])
   var A_CTO1_total = A_CTO1_PorC + A_CTO1_PC
  
 var A_CTO2 = sheet.getRange(row, 51).getValue();
  var A_CTOs2 = A_CTO2.split(slashSeparator);
   var A_CTO2_PorC = parseFloat(A_CTOs2[0])
   var A_CTO2_PC = parseFloat(A_CTOs2[1])
   var A_CTO2_total = A_CTO2_PorC + A_CTO2_PC
  
 var A_CTO3 = sheet.getRange(row, 52).getValue();
  var A_CTOs3 = A_CTO3.split(slashSeparator);
   var A_CTO3_PorC = parseFloat(A_CTOs3[0])
   var A_CTO3_PC = parseFloat(A_CTOs3[1])
   var A_CTO3_total = A_CTO3_PorC + A_CTO3_PC
   
 var A_CTO4 = sheet.getRange(row, 53).getValue();
  var A_CTOs4 = A_CTO4.split(slashSeparator);
   var A_CTO4_PorC = parseFloat(A_CTOs4[0])
   var A_CTO4_PC = parseFloat(A_CTOs4[1])
   var A_CTO4_total = A_CTO4_PorC + A_CTO4_PC
  
 var A_totalCTO_PorC = A_CTO1_PorC + A_CTO2_PorC + A_CTO3_PorC + A_CTO4_PorC
 var A_totalCTO_PC = A_CTO1_PC + A_CTO2_PC + A_CTO3_PC + A_CTO4_PC
 var A_totalCTO = A_CTO1_total + A_CTO2_total + A_CTO3_total + A_CTO4_total
 
 //クリア
 var H_clear1 = sheet.getRange(row, 54).getValue();
  var H_clears1 = H_clear1.split(slashSeparator);
   var H_clear1_success = parseFloat(H_clears1[0])
   var H_clear1_chance = parseFloat(H_clears1[1])
 
 var H_clear2 = sheet.getRange(row, 55).getValue();
  var H_clears2 = H_clear2.split(slashSeparator);
   var H_clear2_success = parseFloat(H_clears2[0])
   var H_clear2_chance = parseFloat(H_clears2[1])
   
 var H_clear3 = sheet.getRange(row, 56).getValue();
  var H_clears3 = H_clear3.split(slashSeparator);
   var H_clear3_success = parseFloat(H_clears3[0])
   var H_clear3_chance = parseFloat(H_clears3[1])
 
 var H_clear4 = sheet.getRange(row, 57).getValue();
  var H_clears4 = H_clear4.split(slashSeparator);
   var H_clear4_success = parseFloat(H_clears4[0])
   var H_clear4_chance = parseFloat(H_clears4[1])
   
 var H_clear_success = H_clear1_success + H_clear2_success + H_clear3_success + H_clear4_success
 var H_clear_chance = H_clear1_chance + H_clear2_chance + H_clear3_chance + H_clear4_chance
 
 
 var A_clear1 = sheet.getRange(row, 58).getValue();
  var A_clears1 = A_clear1.split(slashSeparator);
   var A_clear1_success = parseFloat(A_clears1[0])
   var A_clear1_chance = parseFloat(A_clears1[1])
 
 var A_clear2 = sheet.getRange(row, 59).getValue();
  var A_clears2 = A_clear2.split(slashSeparator);
   var A_clear2_success = parseFloat(A_clears2[0])
   var A_clear2_chance = parseFloat(A_clears2[1])
   
 var A_clear3 = sheet.getRange(row, 60).getValue();
  var A_clears3 = A_clear3.split(slashSeparator);
   var A_clear3_success = parseFloat(A_clears3[0])
   var A_clear3_chance = parseFloat(A_clears3[1])
 
 var A_clear4 = sheet.getRange(row, 61).getValue();
  var A_clears4 = A_clear4.split(slashSeparator);
   var A_clear4_success = parseFloat(A_clears4[0])
   var A_clear4_chance = parseFloat(A_clears4[1])
   
 var A_clear_success = A_clear1_success + A_clear2_success + A_clear3_success + A_clear4_success
 var A_clear_chance = A_clear1_chance + A_clear2_chance + A_clear3_chance + A_clear4_chance
 
 //FO
 var FO_chance = sheet.getRange(row, 62).getValue();
  var FO_chances = FO_chance.split(slashSeparator);
   var FO_chance1 = parseFloat(FO_chances[0])
   var FO_chance2 = parseFloat(FO_chances[1])
   var FO_chance3 = parseFloat(FO_chances[2])
   var FO_chance4 = parseFloat(FO_chances[3])
   var FO_chanceTotal = FO_chance1 + FO_chance2 + FO_chance3 + FO_chance4
   
 var H_FO_win = sheet.getRange(row, 63).getValue();
  var H_FO_wins = H_FO_win.split(slashSeparator);
   var H_FO_win1 = parseFloat(H_FO_wins[0])
   var H_FO_win2 = parseFloat(H_FO_wins[1])
   var H_FO_win3 = parseFloat(H_FO_wins[2])
   var H_FO_win4= parseFloat(H_FO_wins[3])
   var H_FO_winTotal = H_FO_win1 + H_FO_win2 + H_FO_win3 + H_FO_win4
 
 var A_FO_win = sheet.getRange(row, 64).getValue();
  var A_FO_wins = A_FO_win.split(slashSeparator);
   var A_FO_win1 = parseFloat(A_FO_wins[0])
   var A_FO_win2 = parseFloat(A_FO_wins[1])
   var A_FO_win3 = parseFloat(A_FO_wins[2])
   var A_FO_win4= parseFloat(A_FO_wins[3])
   var A_FO_winTotal = A_FO_win1 + A_FO_win2 + A_FO_win3 + A_FO_win4
 
 //セーブ
 var H_save = sheet.getRange(row, 65).getValue();
  var H_saves = H_save.split(slashSeparator);
   var H_save_success = parseFloat(H_saves[0])
   var H_save_chance = parseFloat(H_saves[1])   
   
 var A_save = sheet.getRange(row, 66).getValue();
  var A_saves = A_save.split(slashSeparator);
   var A_save_success = parseFloat(A_saves[0])
   var A_save_chance = parseFloat(A_saves[1])   
   
 var title = "スカウティング結果";//メールタイトル
 
 //メール本文を作成
 var mail_body
 = day + "\n"
 + "スカウティング結果\n"
 + game_name + "\n"
 + Home_team + "vs" + Away_team + "の試合は\n"
 + H_totalScore + "-" + A_totalScore + "で" + winner + "\n\n"
 + "--------------------------------------\n\n"
 + "【得点者】\n"
 + Home_team + "\n"
 + "[1Q]\n" + H_scoreGetters1 + "\n"
 + "[2Q]\n" + H_scoreGetters2 + "\n"
 + "[3Q]\n" + H_scoreGetters3 + "\n"
 + "[4Q]\n" + H_scoreGetters4 + "\n\n"
  
 + Away_team + "\n"
 + "[1Q]\n" + A_scoreGetters1 + "\n"
 + "[2Q]\n" + A_scoreGetters2 + "\n"
 + "[3Q]\n" + A_scoreGetters3 + "\n"
 + "[4Q]\n" + A_scoreGetters4 + "\n\n\n"
 
 + "1. 得点\n"
 + Home_team + "\n"
 + "  " + H_totalScore + "（" + H_score1_total + "・"　+ H_score2_total +　"・" + H_score3_total + "・" + H_score4_total + "）\n"
 + Away_team + "\n"
 + "  " + A_totalScore + "（" + A_score1_total + "・"　+ A_score2_total +　"・" + A_score3_total + "・" + A_score4_total + "）\n"
 + "\n"
 
 + "2. ショット\n"
 + Home_team + "\n"
 + "  " + H_totalScore + "/" + H_totalShot + " " + Math.round(H_totalScore/H_totalShot*100) + "%" + " （" + H_score1_total + "/" + H_shot1_total + "・"　+ H_score2_total + "/" + H_shot2_total +　"・" + H_score3_total + "/" + H_shot3_total + "・" + H_score4_total + "/" + H_shot4_total + "）\n"
 + "    AT: " + H_totalScore_AT + "/" + H_totalShot_AT + " " + Math.round(H_totalScore_AT/H_totalShot_AT*100) + "%" + " （" + H_score1_AT + "/" + H_shot1_AT + "・"　+ H_score2_AT + "/" + H_shot2_AT +　"・" + H_score3_AT + "/" + H_shot3_AT + "・" + H_score4_AT + "/" + H_shot4_AT + "）\n"
 + "    MF: " + H_totalScore_MF + "/" + H_totalShot_MF + " " + Math.round(H_totalScore_MF/H_totalShot_MF*100) + "%" + " （" + H_score1_MF + "/" + H_shot1_MF + "・"　+ H_score2_MF + "/" + H_shot2_MF +　"・" + H_score3_MF + "/" + H_shot3_MF + "・" + H_score4_MF + "/" + H_shot4_MF + "）\n"
 + "    DF: " + H_totalScore_DF + "/" + H_totalShot_DF + " " + Math.round(H_totalScore_DF/H_totalShot_DF*100) + "%" + " （" + H_score1_DF + "/" + H_shot1_DF + "・"　+ H_score2_DF + "/" + H_shot2_DF +　"・" + H_score3_DF + "/" + H_shot3_DF + "・" + H_score4_DF + "/" + H_shot4_DF + "）\n"
 + Away_team + "\n"
 + "  " + A_totalScore + "/" + A_totalShot + " " + Math.round(A_totalScore/A_totalShot*100) + "%" + " （" + A_score1_total + "/" + A_shot1_total + "・"　+ A_score2_total + "/" + A_shot2_total +　"・" + A_score3_total + "/" + A_shot3_total + "・" + A_score4_total + "/" + A_shot4_total + "）\n"
 + "    AT: " + A_totalScore_AT + "/" + A_totalShot_AT + " " + Math.round(A_totalScore_AT/A_totalShot_AT*100) + "%" + " （" + A_score1_AT + "/" + A_shot1_AT + "・"　+ A_score2_AT + "/" + A_shot2_AT +　"・" + A_score3_AT + "/" + A_shot3_AT + "・" + A_score4_AT + "/" + A_shot4_AT + "）\n"
 + "    MF: " + A_totalScore_MF + "/" + A_totalShot_MF + " " + Math.round(A_totalScore_MF/A_totalShot_MF*100) + "%" + " （" + A_score1_MF + "/" + A_shot1_MF + "・"　+ A_score2_MF + "/" + A_shot2_MF +　"・" + A_score3_MF + "/" + A_shot3_MF + "・" + A_score4_MF + "/" + A_shot4_MF + "）\n"
 + "    DF: " + A_totalScore_DF + "/" + A_totalShot_DF + " " + Math.round(A_totalScore_DF/A_totalShot_DF*100) + "%" + " （" + A_score1_DF + "/" + A_shot1_DF + "・"　+ A_score2_DF + "/" + A_shot2_DF +　"・" + A_score3_DF + "/" + A_shot3_DF + "・" + A_score4_DF + "/" + A_shot4_DF + "）\n"
 + "\n"
 
 + "3. GB\n"
 + Home_team + "\n"
 + "  " + H_totalGB + "/" + GB_total + " " + Math.round(H_totalGB/GB_total*100) + "%" + " （" + H_GB1_total + "/" + GB_total1 + "・"　+ H_GB2_total + "/" + GB_total2 +　"・" + H_GB3_total + "/" + GB_total3 + "・" + H_GB4_total + "/" + GB_total4 + "）\n"
 + "    O: " + H_totalGB_O + "/" + GB_chance_ASideTotal + " " + Math.round(H_totalGB_O/GB_chance_ASideTotal*100) + "%" + " （" + H_GB1_O + "/" + GB_chance_ASide1 + "・"　+ H_GB2_O + "/" + GB_chance_ASide2 +　"・" + H_GB3_O + "/" + GB_chance_ASide3 + "・" + H_GB4_O + "/" + GB_chance_ASide4 + "）\n"
 + "    M: " + H_totalGB_M + "/" + GB_chance_MSideTotal + " " + Math.round(H_totalGB_M/GB_chance_MSideTotal*100) + "%" + " （" + H_GB1_M + "/" + GB_chance_MSide1 + "・"　+ H_GB2_M + "/" + GB_chance_MSide2 +　"・" + H_GB3_M + "/" + GB_chance_MSide3 + "・" + H_GB4_M + "/" + GB_chance_MSide4 + "）\n"
 + "    D: " + H_totalGB_D + "/" + GB_chance_HSideTotal + " " + Math.round(H_totalGB_D/GB_chance_HSideTotal*100) + "%" + " （" + H_GB1_D + "/" + GB_chance_HSide1 + "・"　+ H_GB2_D + "/" + GB_chance_HSide2 +　"・" + H_GB3_D + "/" + GB_chance_HSide3 + "・" + H_GB4_D + "/" + GB_chance_HSide4 + "）\n" 
 + Away_team + "\n"
 + "  " + A_totalGB + "/" + GB_total + " " + Math.round(A_totalGB/GB_total*100) + "%" + " （" + A_GB1_total + "/" + GB_total1 + "・"　+ A_GB2_total + "/" + GB_total2 +　"・" + A_GB3_total + "/" + GB_total3 + "・" + A_GB4_total + "/" + GB_total4 + "）\n"
 + "    O: " + A_totalGB_O + "/" + GB_chance_HSideTotal + " " + Math.round(A_totalGB_O/GB_chance_HSideTotal*100) + "%" + " （" + A_GB1_O + "/" + GB_chance_HSide1 + "・"　+ A_GB2_O + "/" + GB_chance_HSide2 +　"・" + A_GB3_O + "/" + GB_chance_HSide3 + "・" + A_GB4_O + "/" + GB_chance_HSide4 + "）\n"
 + "    M: " + A_totalGB_M + "/" + GB_chance_MSideTotal + " " + Math.round(A_totalGB_M/GB_chance_MSideTotal*100) + "%" + " （" + A_GB1_M + "/" + GB_chance_MSide1 + "・"　+ A_GB2_M + "/" + GB_chance_MSide2 +　"・" + A_GB3_M + "/" + GB_chance_MSide3 + "・" + A_GB4_M + "/" + GB_chance_MSide4 + "）\n"
 + "    D: " + A_totalGB_D + "/" + GB_chance_ASideTotal + " " + Math.round(A_totalGB_D/GB_chance_ASideTotal*100) + "%" + " （" + A_GB1_D + "/" + GB_chance_ASide1 + "・"　+ A_GB2_D + "/" + GB_chance_ASide2 +　"・" + A_GB3_D + "/" + GB_chance_ASide3 + "・" + A_GB4_D + "/" + GB_chance_ASide4 + "）\n" 
 + "\n"
 
 + "4. TO\n"
 + Home_team + "\n"
 + "  " + H_totalTO + "（" + H_TO1_total + "・"　+ H_TO2_total +　"・" + H_TO3_total + "・" + H_TO4_total + "）\n"
 + "    P: " + H_totalTO_P + "（" + H_TO1_P + "・"　+ H_TO2_P +　"・" + H_TO3_P + "・" + H_TO4_P + "）\n"
 + "    B: " + H_totalTO_B + "（" + H_TO1_B + "・"　+ H_TO2_B +　"・" + H_TO3_B + "・" + H_TO4_B + "）\n"
 + "    S: " + H_totalTO_S + "（" + H_TO1_S + "・"　+ H_TO2_S +　"・" + H_TO3_S + "・" + H_TO4_S + "）\n"
 + Away_team + "\n" 
 + "  " + A_totalTO + "（" + A_TO1_total + "・"　+ A_TO2_total +　"・" + A_TO3_total + "・" + A_TO4_total + "）\n"
 + "    P: " + A_totalTO_P + "（" + A_TO1_P + "・"　+ A_TO2_P +　"・" + A_TO3_P + "・" + A_TO4_P + "）\n"
 + "    B: " + A_totalTO_B + "（" + A_TO1_B + "・"　+ A_TO2_B +　"・" + A_TO3_B + "・" + A_TO4_B + "）\n"
 + "    S: " + A_totalTO_S + "（" + A_TO1_S + "・"　+ A_TO2_S +　"・" + A_TO3_S + "・" + A_TO4_S + "）\n"
 + "\n"
 
 + "5. CTO\n"
 + Home_team + "\n"
 + "  " + H_totalCTO + "（" + H_CTO1_total + "・"　+ H_CTO2_total +　"・" + H_CTO3_total + "・" + H_CTO4_total + "）\n"
 + "    PorC: " + H_totalCTO_PorC + "（" + H_CTO1_PorC + "・"　+ H_CTO2_PorC +　"・" + H_CTO3_PorC + "・" + H_CTO4_PorC + "）\n" 
 + "    PC  : " + H_totalCTO_PC + "（" + H_CTO1_PC + "・"　+ H_CTO2_PC +　"・" + H_CTO3_PC + "・" + H_CTO4_PC + "）\n" 
 + Away_team + "\n"
 + "  " + A_totalCTO + "（" + A_CTO1_total + "・"　+ A_CTO2_total +　"・" + A_CTO3_total + "・" + A_CTO4_total + "）\n"
 + "    PorC: " + A_totalCTO_PorC + "（" + A_CTO1_PorC + "・"　+ A_CTO2_PorC +　"・" + A_CTO3_PorC + "・" + A_CTO4_PorC + "）\n" 
 + "    PC  : " + A_totalCTO_PC + "（" + A_CTO1_PC + "・"　+ A_CTO2_PC +　"・" + A_CTO3_PC + "・" + A_CTO4_PC + "）\n" 
 + "\n"
 
 + "6. クリア\n"
 + Home_team + "\n"
 + "  " + H_clear_success + "/" + H_clear_chance + " " + Math.round(H_clear_success/H_clear_chance*100) + "%" + " （" + H_clear1_success + "/" + H_clear1_chance + "・"　+ H_clear2_success + "/" + H_clear2_chance +　"・" + H_clear3_success + "/" + H_clear3_chance + "・" + H_clear4_success + "/" + H_clear4_chance + "）\n"
 + Away_team + "\n"
 + "  " + A_clear_success + "/" + A_clear_chance + " " + Math.round(A_clear_success/A_clear_chance*100) + "%" + " （" + A_clear1_success + "/" + A_clear1_chance + "・"　+ A_clear2_success + "/" + A_clear2_chance +　"・" + A_clear3_success + "/" + A_clear3_chance + "・" + A_clear4_success + "/" + A_clear4_chance + "）\n"
 + "\n"
 
 + "7. FO\n"
 + Home_team + "\n"
 + "  " + H_FO_winTotal + "/" + FO_chanceTotal + " " + Math.round(H_FO_winTotal/FO_chanceTotal*100) + "%" + " （" + H_FO_win1 + "/" + FO_chance1 + "・"　+ H_FO_win2 + "/" + FO_chance2 +　"・" + H_FO_win3 + "/" + FO_chance3 + "・" + H_FO_win4 + "/" + FO_chance4 + "）\n"
 + Away_team + "\n" 
 + "  " + A_FO_winTotal + "/" + FO_chanceTotal + " " + Math.round(A_FO_winTotal/FO_chanceTotal*100) + "%" + " （" + A_FO_win1 + "/" + FO_chance1 + "・"　+ A_FO_win2 + "/" + FO_chance2 +　"・" + A_FO_win3 + "/" + FO_chance3 + "・" + A_FO_win4 + "/" + FO_chance4 + "）\n"
 + "\n"
 
 + "8. セーブ\n"
 + Home_team + "\n"
 + "  " + H_save_success + "/" + H_save_chance + " " + Math.round(H_save_success/H_save_chance*100) + "%\n" 
 + Away_team + "\n"
 + "  " + A_save_success + "/" + A_save_chance + " " + Math.round(A_save_success/A_save_chance*100) + "%\n" 
 + "\n" 
 + "---------------------------------------\n"
 + "以上";

  //メール送信
 GmailApp.sendEmail(mail,title,mail_body);
}
