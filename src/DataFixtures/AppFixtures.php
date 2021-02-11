<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    /** @var UserPasswordEncoderInterface */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create("fr_FR");

        $user = new User();
        $user
            ->setRoles(['ROLE_ADMIN'])
            ->setEmail("admin@soloblog.com")
            ->setPassword($this->encoder->encodePassword($user, 'test'))
        ;
        $manager->persist($user);

        $user = new User();
        $user
            ->setRoles(['ROLE_USER'])
            ->setEmail("user@soloblog.com")
            ->setPassword($this->encoder->encodePassword($user, 'test'))
        ;
        $manager->persist($user);

        $manager->flush();
    }
}
