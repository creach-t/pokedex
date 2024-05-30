-- Supprimer les données existantes pour éviter les doublons
DELETE FROM journal;
DELETE FROM "user";

-- Générer des utilisateurs fictifs
INSERT INTO "user" (name, email, password)
VALUES 
  ('Alice', 'alice@example.com', 'password123'),
  ('Bob', 'bob@example.com', 'securepass'),
  ('Charlie', 'charlie@example.com', 'letmein');

-- Récupérer les IDs des utilisateurs nouvellement insérés
-- Ceci peut varier selon votre base de données. Consultez la documentation de PostgreSQL pour les méthodes spécifiques.
-- Pour cet exemple, on suppose que les IDs sont des nombres séquentiels à partir de 1.
-- Si vous avez des contraintes d'intégrité référentielle, assurez-vous d'utiliser des requêtes appropriées pour récupérer les IDs.
SELECT setval(pg_get_serial_sequence('"user"', 'id'), coalesce(max(id), 1)) FROM "user";

-- Insérer des entrées de journal associées à chaque utilisateur
INSERT INTO journal (user_id, date, mood, notes)
SELECT 
  u.id,
  current_timestamp - interval '7' day * (random() * 30), -- Date aléatoire dans les 30 derniers jours
  CASE floor(random() * 3) 
    WHEN 0 THEN 'happy'
    WHEN 1 THEN 'sad'
    ELSE 'neutral'
  END,
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
FROM "user" u
CROSS JOIN generate_series(1, 10); -- 10 entrées de journal par utilisateur
