import {Client} from 'pg';
const SQL = `
    CREATE TABLE IF NOT EXISTS category (
        category_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        description VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS item (
        item_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        description VARCHAR(255),
        price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
        stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
        category_id INTEGER NOT NULL,

        CONSTRAINT fk_item_category
            FOREIGN KEY (category_id)
            REFERENCES category(category_id)
            ON DELETE RESTRICT
            ON UPDATE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_item_category_id
        ON item(category_id);

    INSERT INTO category (name, description)
    VALUES
        ('Laptops', 'Portable computers for work, study, and gaming.'),
        ('Smartphones', 'Mobile phones and the latest smart devices.'),
        ('Accessories', 'Essential accessories for your tech devices.'),
        ('Monitors', 'Displays for productivity, gaming, and entertainment.'),
        ('Components', 'Computer parts for building and upgrading PCs.'),
        ('Audio', 'Headphones, speakers, and audio equipment.')
    ON CONFLICT (name) DO NOTHING;

    INSERT INTO item (name, description, price, stock, category_id)
    VALUES
        (
            'Dell XPS 15',
            'Premium laptop for productivity and creative work.',
            1499.99, 12,
            (SELECT category_id FROM category WHERE name = 'Laptops')
        ),
        (
            'MacBook Air M4',
            'Lightweight laptop powered by Apple silicon.',
            1099.00, 8,
            (SELECT category_id FROM category WHERE name = 'Laptops')
        ),
        (
            'Lenovo ThinkPad E14',
            'Business laptop designed for everyday productivity.',
            899.99, 5,
            (SELECT category_id FROM category WHERE name = 'Laptops')
        ),
        (
            'Samsung Galaxy S25',
            'Samsung smartphone with advanced performance and cameras.',
            799.99, 15,
            (SELECT category_id FROM category WHERE name = 'Smartphones')
        ),
        (
            'iPhone 16',
            'Apple smartphone with an advanced camera system.',
            899.00, 10,
            (SELECT category_id FROM category WHERE name = 'Smartphones')
        ),
        (
            'Logitech MX Master 3S',
            'Wireless mouse designed for productivity.',
            99.99, 20,
            (SELECT category_id FROM category WHERE name = 'Accessories')
        ),
        (
            'Samsung 27-inch Monitor',
            '27-inch display for work and entertainment.',
            249.99, 7,
            (SELECT category_id FROM category WHERE name = 'Monitors')
        ),
        (
            'ASUS RTX 4070',
            'Graphics card for gaming and graphics-intensive tasks.',
            599.99, 0,
            (SELECT category_id FROM category WHERE name = 'Components')
        ),
        (
            'Sony WH-1000XM5',
            'Wireless headphones with noise cancellation.',
            349.99, 9,
            (SELECT category_id FROM category WHERE name = 'Audio')
        )
    ON CONFLICT DO NOTHING;
`;

const main=async ()=>{
 const database_url=process.argv[2] || process.env.DATABASE_URL
 if(!database_url){
   throw new Error('database url is missing');
 }
 const client=new Client({
  connectionString:database_url
 })
 try {
  console.log('seeding...');
  await client.connect ();
  await client.query(SQL);
  await client.end();
  console.log('done');
 }catch(error){
  console.error(error);
  throw error;
 }
}

main();



