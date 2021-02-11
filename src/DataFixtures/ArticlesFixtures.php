<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class ArticlesFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $faker = Factory::create("fr_FR");

        $dt = $faker->dateTimeBetween($startDate = '-1 years', $endDate = '+2 years');
        $date = $dt->format("Y-m-d");

        for ($i=0; $i < 50; $i++) {
            $article = new Article();

            $article
                ->setTitle($faker->sentence(rand(2,4)))
                ->setContent($faker->paragraph())
                ->setDate(\DateTime::createFromFormat('Y-m-d', $date))
                ->setCategories([$faker->randomElement($array = array ("sport", "culture", "gaming", "osef"))])
            ;
            $manager->persist($article);
        }

        $manager->flush();
    }
}
