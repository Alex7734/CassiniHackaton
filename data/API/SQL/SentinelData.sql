CREATE TABLE SentinelData (
    Id CHAR(36) PRIMARY KEY,
    Name VARCHAR(255),
    ContentType VARCHAR(255),
    ContentLength BIGINT,
    OriginDate DATETIME(3),
    PublicationDate DATETIME(3),
    ModificationDate DATETIME(3),
    Online BOOLEAN,
    EvictionDate DATETIME(3) DEFAULT NULL,
    S3Path TEXT,
    ContentDateStart DATETIME(3),
    ContentDateEnd DATETIME(3),
    Footprint TEXT,
    GeoFootprintType VARCHAR(50),
    GeoFootprintCoordinates TEXT
);
