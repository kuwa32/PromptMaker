<?php
// /home/miraie-yumemiru/www/api/save_data.php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// 生のPOSTデータを確認
$raw = file_get_contents("php://input");

// JSONデコード
$data = json_decode($raw, true);

// 簡単なバリデーション
if (!isset($data['school']) || !isset($data['grade'])|| !isset($data['gender'])|| !isset($data['route'])) {
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
    exit;
}

// DB接続
try {
    $pdo = new PDO("mysql:host=mysql3108.db.sakura.ne.jp;dbname=miraie-yumemiru_clinic;charset=utf8", "miraie-yumemiru_clinic", "Kome832Miraie");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "DB接続失敗: " . $e->getMessage();
    exit;
}

// SQL実行
$stmt = $pdo->prepare("INSERT INTO FORM_INPUT (school, grade, gender, route) VALUES (?, ?, ?, ?)");
$stmt->execute([$data['school'], $data['grade'], $data['gender'], $data['route']]);

echo json_encode(["status" => "success"]);
?>
