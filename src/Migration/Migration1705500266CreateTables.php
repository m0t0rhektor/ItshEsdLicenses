<?php declare(strict_types=1);

namespace EsdLicensces\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1705500266CreateTables extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1705500266;
    }

    public function update(Connection $connection): void
    {
        $query = <<<SQL
        CREATE TABLE IF NOT EXISTS `itsh_esd_downloadlinks` (
            `id`                INT             NOT NULL,
            `name`   VARCHAR(255)    NOT NULL,
            `link`  VARCHAR(255) NOT NULL,
            PRIMARY KEY (id)
        )
            ENGINE = InnoDB
            DEFAULT CHARSET = utf8mb4
            COLLATE = utf8mb4_unicode_ci;
        SQL;

        $connection->executeStatement($query);
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
