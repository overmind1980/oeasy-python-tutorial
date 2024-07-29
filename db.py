from psycopg_pool import ConnectionPool

conninfo = "postgres://postgres:oeasypg@localhost:5432/oracle"
pool = ConnectionPool(conninfo)
