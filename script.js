/**
 * NPTEL Database Management System - 100 MCQ Practice Hub
 * Course by IIT Kharagpur (Prof. Partha Pratim Das & Prof. Samiran Chattopadhyay)
 */

const questionsData = [
    {
        id: 1,
        category: "Intro & ER Model",
        q: "Which of the following is NOT an advantage of using a DBMS over a traditional file system?",
        options: ["Reduced data redundancy", "Improved data security", "Data independence", "Increased data inconsistency"],
        ans: "d) Increased data inconsistency"
    },
    {
        id: 2,
        category: "Intro & ER Model",
        q: "The physical level of data abstraction describes:",
        options: ["How data is actually stored", "What data is stored", "User views of the data", "Relationships among data"],
        ans: "a) How data is actually stored"
    },
    {
        id: 3,
        category: "Intro & ER Model",
        q: "Logical data independence means:",
        options: ["Changing the physical schema without changing the logical schema", "Changing the logical schema without changing application programs", "Changing application programs without changing the schema", "None of the above"],
        ans: "b) Changing the logical schema without changing application programs"
    },
    {
        id: 4,
        category: "Intro & ER Model",
        q: "In an ER diagram, a double rectangle represents:",
        options: ["Strong entity", "Weak entity", "Relationship", "Attribute"],
        ans: "b) Weak entity"
    },
    {
        id: 5,
        category: "Intro & ER Model",
        q: "Total participation of an entity in a relationship is represented by:",
        options: ["Single line", "Double line", "Dashed line", "Arrow"],
        ans: "b) Double line"
    },
    {
        id: 6,
        category: "Intro & ER Model",
        q: "A super key is:",
        options: ["A minimal set of attributes that uniquely identifies a tuple", "A set of attributes that uniquely identifies a tuple", "Always a primary key", "Always a candidate key"],
        ans: "b) A set of attributes that uniquely identifies a tuple"
    },
    {
        id: 7,
        category: "Intro & ER Model",
        q: "A candidate key is:",
        options: ["Any super key", "A minimal super key", "Always the primary key", "A foreign key"],
        ans: "b) A minimal super key"
    },
    {
        id: 8,
        category: "Intro & ER Model",
        q: "Which of the following is true about a primary key?",
        options: ["It can contain NULL values", "It must be unique and non-null", "There can be multiple primary keys in a relation", "It is always a single attribute"],
        ans: "b) It must be unique and non-null"
    },
    {
        id: 9,
        category: "Intro & ER Model",
        q: "The degree of a relationship in ER model refers to:",
        options: ["Number of entities participating", "Number of attributes", "Cardinality", "Number of relationships"],
        ans: "a) Number of entities participating"
    },
    {
        id: 10,
        category: "Relational Algebra",
        q: "In relational algebra, the selection operator (σ) is used for:",
        options: ["Selecting columns", "Selecting rows based on a condition", "Joining tables", "Projecting attributes"],
        ans: "b) Selecting rows based on a condition"
    },
    {
        id: 11,
        category: "Relational Algebra",
        q: "The projection operator (π) in relational algebra:",
        options: ["Selects rows", "Selects columns and eliminates duplicates", "Performs Cartesian product", "Performs union"],
        ans: "b) Selects columns and eliminates duplicates"
    },
    {
        id: 12,
        category: "Relational Algebra",
        q: "Which relational algebra operation is not a binary operation?",
        options: ["Union", "Intersection", "Selection", "Join"],
        ans: "c) Selection"
    },
    {
        id: 13,
        category: "Relational Algebra",
        q: "The Cartesian product of two relations R (degree m) and S (degree n) will have degree:",
        options: ["m + n", "m × n", "max(m,n)", "min(m,n)"],
        ans: "a) m + n"
    },
    {
        id: 14,
        category: "Relational Algebra",
        q: "Natural join is equivalent to:",
        options: ["Cartesian product followed by selection on common attributes", "Cartesian product only", "Union of two relations", "Intersection of two relations"],
        ans: "a) Cartesian product followed by selection on common attributes"
    },
    {
        id: 15,
        category: "Relational Algebra",
        q: "Which of the following is a procedural query language?",
        options: ["Relational Calculus", "SQL", "Relational Algebra", "QBE"],
        ans: "c) Relational Algebra"
    },
    {
        id: 16,
        category: "Relational Algebra",
        q: "Tuple relational calculus is a:",
        options: ["Procedural language", "Non-procedural language", "Both", "None"],
        ans: "b) Non-procedural language"
    },
    {
        id: 17,
        category: "SQL & DDL/DML",
        q: "In SQL, which command is used to remove a table completely?",
        options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
        ans: "c) DROP"
    },
    {
        id: 18,
        category: "SQL & DDL/DML",
        q: "The SQL command to remove all rows from a table but keep the structure is:",
        options: ["DELETE", "TRUNCATE", "DROP", "ALTER"],
        ans: "b) TRUNCATE"
    },
    {
        id: 19,
        category: "SQL & DDL/DML",
        q: "Which of the following is a DDL command?",
        options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
        ans: "c) CREATE"
    },
    {
        id: 20,
        category: "SQL & DDL/DML",
        q: "Which of the following is a DML command?",
        options: ["CREATE", "ALTER", "INSERT", "DROP"],
        ans: "c) INSERT"
    },
    {
        id: 21,
        category: "SQL & DDL/DML",
        q: "The result of a SELECT statement is:",
        options: ["Always a single value", "A relation (table)", "Always sorted", "Always unique rows"],
        ans: "b) A relation (table)"
    },
    {
        id: 22,
        category: "SQL & DDL/DML",
        q: "Which clause is used to filter groups in SQL?",
        options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
        ans: "b) HAVING"
    },
    {
        id: 23,
        category: "SQL & DDL/DML",
        q: "The GROUP BY clause is used with:",
        options: ["Aggregate functions", "JOIN only", "ORDER BY only", "WHERE only"],
        ans: "a) Aggregate functions"
    },
    {
        id: 24,
        category: "SQL & DDL/DML",
        q: "Which aggregate function ignores NULL values?",
        options: ["COUNT(*)", "COUNT(column)", "Both COUNT(*) and COUNT(column)", "Neither"],
        ans: "b) COUNT(column)"
    },
    {
        id: 25,
        category: "SQL & DDL/DML",
        q: "A foreign key can:",
        options: ["Be NULL", "Never be NULL", "Only reference a primary key of the same table", "Be composite only"],
        ans: "a) Be NULL"
    },
    {
        id: 26,
        category: "SQL & DDL/DML",
        q: "Referential integrity is enforced by:",
        options: ["Primary key", "Foreign key", "Unique key", "Check constraint"],
        ans: "b) Foreign key"
    },
    {
        id: 27,
        category: "Normalization",
        q: "A functional dependency X → Y is trivial if:",
        options: ["Y is a subset of X", "X is a subset of Y", "X and Y are disjoint", "X and Y have the same number of attributes"],
        ans: "a) Y is a subset of X"
    },
    {
        id: 28,
        category: "Normalization",
        q: "Armstrong’s axioms are used for:",
        options: ["Finding candidate keys", "Inferring all functional dependencies", "Normalization only", "Query optimization"],
        ans: "b) Inferring all functional dependencies"
    },
    {
        id: 29,
        category: "Normalization",
        q: "A relation is in 1NF if:",
        options: ["It has no partial dependency", "It has atomic values", "It has no transitive dependency", "Every determinant is a candidate key"],
        ans: "b) It has atomic values"
    },
    {
        id: 30,
        category: "Normalization",
        q: "A relation is in 2NF if:",
        options: ["It is in 1NF and has no partial dependency", "It is in 1NF and has no transitive dependency", "Every determinant is a candidate key", "It has no multi-valued dependency"],
        ans: "a) It is in 1NF and has no partial dependency"
    },
    {
        id: 31,
        category: "Normalization",
        q: "A relation is in 3NF if:",
        options: ["It is in 2NF and has no transitive dependency", "It is in 2NF and every determinant is a candidate key", "It is in BCNF", "It has no partial dependency only"],
        ans: "a) It is in 2NF and has no transitive dependency"
    },
    {
        id: 32,
        category: "Normalization",
        q: "A relation is in BCNF if:",
        options: ["It is in 3NF", "Every determinant is a candidate key", "It has no multi-valued dependency", "It is in 4NF"],
        ans: "b) Every determinant is a candidate key"
    },
    {
        id: 33,
        category: "Normalization",
        q: "Which normal form deals with multi-valued dependencies?",
        options: ["3NF", "BCNF", "4NF", "5NF"],
        ans: "c) 4NF"
    },
    {
        id: 34,
        category: "Normalization",
        q: "Lossless join decomposition means:",
        options: ["The original relation can be reconstructed by joining the decomposed relations", "There is no information loss", "Both a and b", "None"],
        ans: "c) Both a and b"
    },
    {
        id: 35,
        category: "Normalization",
        q: "Dependency preservation means:",
        options: ["All functional dependencies are preserved in the decomposed relations", "The join is lossless", "Both", "None"],
        ans: "a) All functional dependencies are preserved in the decomposed relations"
    },
    {
        id: 36,
        category: "Indexing & Hashing",
        q: "In a B+ tree, data pointers are present in:",
        options: ["Only leaf nodes", "Only non-leaf nodes", "Both leaf and non-leaf nodes", "Root only"],
        ans: "a) Only leaf nodes"
    },
    {
        id: 37,
        category: "Indexing & Hashing",
        q: "The order of a B+ tree is defined as the:",
        options: ["Maximum number of children a non-leaf node can have", "Minimum number of children", "Number of levels", "Number of keys in root"],
        ans: "a) Maximum number of children a non-leaf node can have"
    },
    {
        id: 38,
        category: "Indexing & Hashing",
        q: "A clustered index:",
        options: ["Determines the physical order of data", "Is always secondary", "Can be many per table", "Does not affect data order"],
        ans: "a) Determines the physical order of data"
    },
    {
        id: 39,
        category: "Indexing & Hashing",
        q: "A secondary index:",
        options: ["Is built on the primary key", "Does not determine physical order of data", "Is always unique", "Is the same as clustered index"],
        ans: "b) Does not determine physical order of data"
    },
    {
        id: 40,
        category: "Indexing & Hashing",
        q: "In hashing, collision resolution using linked lists is called:",
        options: ["Open addressing", "Chaining", "Linear probing", "Quadratic probing"],
        ans: "b) Chaining"
    },
    {
        id: 41,
        category: "Indexing & Hashing",
        q: "Linear probing is a form of:",
        options: ["Chaining", "Open addressing", "Rehashing", "None"],
        ans: "b) Open addressing"
    },
    {
        id: 42,
        category: "Transactions & Concurrency",
        q: "ACID properties of a transaction stand for:",
        options: ["Atomicity, Consistency, Isolation, Durability", "Atomicity, Concurrency, Isolation, Durability", "Accuracy, Consistency, Isolation, Durability", "Atomicity, Consistency, Integrity, Durability"],
        ans: "a) Atomicity, Consistency, Isolation, Durability"
    },
    {
        id: 43,
        category: "Transactions & Concurrency",
        q: "Atomicity means:",
        options: ["All or nothing", "Consistency of database", "Isolation of transactions", "Durability of changes"],
        ans: "a) All or nothing"
    },
    {
        id: 44,
        category: "Transactions & Concurrency",
        q: "Isolation means:",
        options: ["Transactions are executed one after another", "Concurrent transactions do not interfere with each other", "Changes are permanent", "Database remains consistent"],
        ans: "b) Concurrent transactions do not interfere with each other"
    },
    {
        id: 45,
        category: "Transactions & Concurrency",
        q: "A schedule is conflict serializable if:",
        options: ["Its conflict graph is acyclic", "Its conflict graph is cyclic", "It is view serializable", "It is recoverable"],
        ans: "a) Its conflict graph is acyclic"
    },
    {
        id: 46,
        category: "Transactions & Concurrency",
        q: "Two phase locking protocol ensures:",
        options: ["Conflict serializability", "View serializability", "Recoverability", "All of the above"],
        ans: "a) Conflict serializability"
    },
    {
        id: 47,
        category: "Transactions & Concurrency",
        q: "In two phase locking, the growing phase is when:",
        options: ["Locks are acquired", "Locks are released", "Both", "None"],
        ans: "a) Locks are acquired"
    },
    {
        id: 48,
        category: "Transactions & Concurrency",
        q: "A cascade-less schedule is one where:",
        options: ["A transaction does not read a value written by an uncommitted transaction", "No dirty reads occur", "Both a and b", "None"],
        ans: "c) Both a and b"
    },
    {
        id: 49,
        category: "Transactions & Concurrency",
        q: "Strict two phase locking requires that:",
        options: ["All locks are held till commit", "Locks are released as soon as possible", "Only shared locks are used", "None"],
        ans: "a) All locks are held till commit"
    },
    {
        id: 50,
        category: "Transactions & Concurrency",
        q: "Deadlock can be handled by:",
        options: ["Prevention", "Detection and recovery", "Both", "None"],
        ans: "c) Both"
    },
    {
        id: 51,
        category: "Transactions & Concurrency",
        q: "Wait-die and wound-wait are schemes for:",
        options: ["Deadlock prevention", "Deadlock detection", "Locking", "Timestamp ordering"],
        ans: "a) Deadlock prevention"
    },
    {
        id: 52,
        category: "Transactions & Concurrency",
        q: "In timestamp ordering protocol, a transaction is allowed to write if:",
        options: ["Its timestamp is greater than the read and write timestamps of the data item", "Its timestamp is smaller", "Always", "Never"],
        ans: "a) Its timestamp is greater than the read and write timestamps of the data item"
    },
    {
        id: 53,
        category: "Recovery & Logging",
        q: "Log-based recovery uses:",
        options: ["Undo and redo operations", "Only undo", "Only redo", "Shadow paging"],
        ans: "a) Undo and redo operations"
    },
    {
        id: 54,
        category: "Recovery & Logging",
        q: "In deferred update (NO-UNDO/REDO), during recovery we need:",
        options: ["Only REDO", "Only UNDO", "Both", "Neither"],
        ans: "a) Only REDO"
    },
    {
        id: 55,
        category: "Recovery & Logging",
        q: "Immediate update (UNDO/REDO) requires:",
        options: ["Both UNDO and REDO", "Only UNDO", "Only REDO", "None"],
        ans: "a) Both UNDO and REDO"
    },
    {
        id: 56,
        category: "Recovery & Logging",
        q: "Shadow paging is a recovery technique that:",
        options: ["Does not require UNDO or REDO", "Requires both", "Uses logs", "Is based on timestamps"],
        ans: "a) Does not require UNDO or REDO"
    },
    {
        id: 57,
        category: "Recovery & Logging",
        q: "The purpose of a checkpoint is:",
        options: ["To reduce recovery time", "To increase concurrency", "To prevent deadlocks", "None"],
        ans: "a) To reduce recovery time"
    },
    {
        id: 58,
        category: "Query Processing",
        q: "Query optimization aims to:",
        options: ["Find the most efficient execution plan", "Rewrite the query", "Both", "None"],
        ans: "c) Both"
    },
    {
        id: 59,
        category: "Query Processing",
        q: "In cost-based optimization, the cost is measured mainly in terms of:",
        options: ["Number of disk I/Os", "CPU time only", "Network cost only", "Number of joins only"],
        ans: "a) Number of disk I/Os"
    },
    {
        id: 60,
        category: "Query Processing",
        q: "Which of the following is a heuristic for query optimization?",
        options: ["Perform selection as early as possible", "Perform projection as late as possible", "Avoid joins", "Always use Cartesian product"],
        ans: "a) Perform selection as early as possible"
    },
    {
        id: 61,
        category: "SQL & DDL/DML",
        q: "A view in SQL is:",
        options: ["A virtual table", "A physical table", "Always updatable", "Stored with data"],
        ans: "a) A virtual table"
    },
    {
        id: 62,
        category: "SQL & DDL/DML",
        q: "Which of the following can make a view non-updatable?",
        options: ["Presence of DISTINCT", "Aggregate functions", "Joins of multiple tables", "All of the above"],
        ans: "d) All of the above"
    },
    {
        id: 63,
        category: "SQL & DDL/DML",
        q: "The command to create a view is:",
        options: ["CREATE VIEW", "CREATE TABLE AS", "DEFINE VIEW", "MAKE VIEW"],
        ans: "a) CREATE VIEW"
    },
    {
        id: 64,
        category: "Intro & ER Model",
        q: "In ER model, a multi-valued attribute is represented by:",
        options: ["Double oval", "Single oval", "Dashed oval", "Rectangle"],
        ans: "a) Double oval"
    },
    {
        id: 65,
        category: "Intro & ER Model",
        q: "A composite attribute is represented by:",
        options: ["Oval connected to other ovals", "Double oval", "Dashed oval", "Diamond"],
        ans: "a) Oval connected to other ovals"
    },
    {
        id: 66,
        category: "Intro & ER Model",
        q: "The cardinality ratio of a relationship indicates:",
        options: ["Number of entities participating", "How many instances of one entity relate to another", "Number of attributes", "Degree of relationship"],
        ans: "b) How many instances of one entity relate to another"
    },
    {
        id: 67,
        category: "Intro & ER Model",
        q: "In a one-to-many relationship from A to B, the foreign key is usually placed in:",
        options: ["Relation A", "Relation B", "Both", "A separate relation"],
        ans: "b) Relation B"
    },
    {
        id: 68,
        category: "Intro & ER Model",
        q: "For a many-to-many relationship, we need:",
        options: ["A separate relation", "Foreign key in one of the entities", "No additional relation", "Primary key only"],
        ans: "a) A separate relation"
    },
    {
        id: 69,
        category: "Intro & ER Model",
        q: "Which of the following is true about weak entities?",
        options: ["They have their own primary key", "They depend on a strong entity for identification", "They cannot have attributes", "They are always total participants"],
        ans: "b) They depend on a strong entity for identification"
    },
    {
        id: 70,
        category: "Intro & ER Model",
        q: "The discriminating attribute of a weak entity is also called:",
        options: ["Partial key", "Primary key", "Foreign key", "Candidate key"],
        ans: "a) Partial key"
    },
    {
        id: 71,
        category: "SQL & DDL/DML",
        q: "In SQL, the INTERSECT operator returns:",
        options: ["Common tuples of two relations", "All tuples of two relations", "Tuples in first but not second", "Cartesian product"],
        ans: "a) Common tuples of two relations"
    },
    {
        id: 72,
        category: "SQL & DDL/DML",
        q: "The EXCEPT (or MINUS) operator returns:",
        options: ["Tuples in first relation but not in second", "Common tuples", "All tuples", "None"],
        ans: "a) Tuples in first relation but not in second"
    },
    {
        id: 73,
        category: "SQL & DDL/DML",
        q: "Which join returns all rows from the left table and matching rows from the right?",
        options: ["INNER JOIN", "LEFT OUTER JOIN", "RIGHT OUTER JOIN", "FULL OUTER JOIN"],
        ans: "b) LEFT OUTER JOIN"
    },
    {
        id: 74,
        category: "SQL & DDL/DML",
        q: "A FULL OUTER JOIN returns:",
        options: ["Only matching rows", "All rows from both tables", "Only left table rows", "Only right table rows"],
        ans: "b) All rows from both tables"
    },
    {
        id: 75,
        category: "SQL & DDL/DML",
        q: "In nested queries, a correlated subquery:",
        options: ["Depends on the outer query", "Is independent of the outer query", "Is executed only once", "Cannot use aggregate functions"],
        ans: "a) Depends on the outer query"
    },
    {
        id: 76,
        category: "SQL & DDL/DML",
        q: "The EXISTS operator returns true if:",
        options: ["The subquery returns at least one row", "The subquery returns no rows", "The subquery returns NULL", "Always false"],
        ans: "a) The subquery returns at least one row"
    },
    {
        id: 77,
        category: "SQL & DDL/DML",
        q: "Which of the following is used for granting privileges in SQL?",
        options: ["GRANT", "REVOKE", "Both", "None"],
        ans: "c) Both"
    },
    {
        id: 78,
        category: "SQL & DDL/DML",
        q: "The privilege to create a table is:",
        options: ["CREATE", "INSERT", "SELECT", "UPDATE"],
        ans: "a) CREATE"
    },
    {
        id: 79,
        category: "Transactions & Concurrency",
        q: "In concurrency control, a dirty read occurs when:",
        options: ["A transaction reads a value written by an uncommitted transaction", "A transaction reads the same value twice", "Two transactions write the same value", "None"],
        ans: "a) A transaction reads a value written by an uncommitted transaction"
    },
    {
        id: 80,
        category: "Transactions & Concurrency",
        q: "A non-repeatable read occurs when:",
        options: ["A transaction reads the same data twice and gets different values", "A transaction reads uncommitted data", "A phantom appears", "None"],
        ans: "a) A transaction reads the same data twice and gets different values"
    },
    {
        id: 81,
        category: "Transactions & Concurrency",
        q: "Phantom read problem is related to:",
        options: ["Insertion or deletion of rows that affect a query result", "Dirty reads", "Non-repeatable reads only", "None"],
        ans: "a) Insertion or deletion of rows that affect a query result"
    },
    {
        id: 82,
        category: "Transactions & Concurrency",
        q: "The isolation level that prevents dirty reads but allows non-repeatable and phantom reads is:",
        options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
        ans: "b) Read Committed"
    },
    {
        id: 83,
        category: "Transactions & Concurrency",
        q: "The highest isolation level is:",
        options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
        ans: "d) Serializable"
    },
    {
        id: 84,
        category: "Query Processing",
        q: "In query processing, the first step is usually:",
        options: ["Parsing and translation", "Optimization", "Evaluation", "Execution"],
        ans: "a) Parsing and translation"
    },
    {
        id: 85,
        category: "Query Processing",
        q: "A query evaluation plan is:",
        options: ["A sequence of operations to evaluate the query", "The SQL query itself", "The result of the query", "None"],
        ans: "a) A sequence of operations to evaluate the query"
    },
    {
        id: 86,
        category: "Query Processing",
        q: "Materialization in query evaluation means:",
        options: ["Storing intermediate results on disk", "Pipelining results", "Both", "None"],
        ans: "a) Storing intermediate results on disk"
    },
    {
        id: 87,
        category: "Query Processing",
        q: "Pipelining in query evaluation means:",
        options: ["Passing results of one operation directly to the next", "Storing all intermediate results", "Using only indexes", "None"],
        ans: "a) Passing results of one operation directly to the next"
    },
    {
        id: 88,
        category: "Indexing & Hashing",
        q: "Which index is most suitable for range queries?",
        options: ["Hash index", "B+ tree index", "Bitmap index", "None"],
        ans: "b) B+ tree index"
    },
    {
        id: 89,
        category: "Indexing & Hashing",
        q: "Hash indexes are good for:",
        options: ["Equality searches", "Range searches", "Both", "Neither"],
        ans: "a) Equality searches"
    },
    {
        id: 90,
        category: "Indexing & Hashing",
        q: "In a dense index, there is an index entry for:",
        options: ["Every search key value", "Only some search key values", "Only the first record of each block", "None"],
        ans: "a) Every search key value"
    },
    {
        id: 91,
        category: "Indexing & Hashing",
        q: "In a sparse index, there is an index entry for:",
        options: ["Every search key value", "Only some search key values (usually one per block)", "Every record", "None"],
        ans: "b) Only some search key values (usually one per block)"
    },
    {
        id: 92,
        category: "Indexing & Hashing",
        q: "A primary index is built on:",
        options: ["The primary key (or ordered search key)", "Any non-key attribute", "Multiple attributes only", "None"],
        ans: "a) The primary key (or ordered search key)"
    },
    {
        id: 93,
        category: "Storage & RAID",
        q: "The blocking factor of a file is:",
        options: ["Number of records that can fit in a block", "Number of blocks in the file", "Size of a record", "None"],
        ans: "a) Number of records that can fit in a block"
    },
    {
        id: 94,
        category: "Storage & RAID",
        q: "Spanned organization of records means:",
        options: ["A record can span multiple blocks", "A record must fit in one block", "Records are of fixed length", "None"],
        ans: "a) A record can span multiple blocks"
    },
    {
        id: 95,
        category: "Storage & RAID",
        q: "Unspanned organization means:",
        options: ["A record must completely fit in one block", "A record can span blocks", "Variable length records only", "None"],
        ans: "a) A record must completely fit in one block"
    },
    {
        id: 96,
        category: "Storage & RAID",
        q: "RAID level 0 provides:",
        options: ["Striping without redundancy", "Mirroring", "Parity", "Both striping and parity"],
        ans: "a) Striping without redundancy"
    },
    {
        id: 97,
        category: "Storage & RAID",
        q: "RAID level 1 provides:",
        options: ["Mirroring", "Striping", "Parity", "None"],
        ans: "a) Mirroring"
    },
    {
        id: 98,
        category: "Storage & RAID",
        q: "Which RAID level provides both striping and parity?",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        ans: "c) RAID 5"
    },
    {
        id: 99,
        category: "Storage & RAID",
        q: "The main disadvantage of RAID 0 is:",
        options: ["No fault tolerance", "Low performance", "High cost", "None"],
        ans: "a) No fault tolerance"
    },
    {
        id: 100,
        category: "Recovery & Logging",
        q: "In database recovery, the log is used to:",
        options: ["Record all changes made by transactions", "Store the database", "Optimize queries", "None"],
        ans: "a) Record all changes made by transactions"
    }
];

// Application State
const state = {
    selectedCategory: "All",
    searchQuery: "",
    showBookmarkedOnly: false,
    userAnswers: JSON.parse(localStorage.getItem('nptel_dbms_user_answers') || '{}'),
    visibleAnswers: new Set(),
    bookmarks: new Set(JSON.parse(localStorage.getItem('nptel_dbms_bookmarks') || '[]')),
    theme: localStorage.getItem('nptel_dbms_theme') || 'light'
};

// DOM Element Cache
let questionsContainer;
let searchInput;
let clearSearchBtn;
let categoryContainer;
let statsTotalEl;
let statsAnsweredEl;
let statsCorrectEl;
let statsScoreEl;
let statsBookmarkedEl;
let progressBarEl;
let backToTopBtn;
let themeToggleBtn;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    cacheDOM();
    applyTheme(state.theme);
    setupEventListeners();
    renderCategories();
    renderQuestions();
    updateStats();
});

function cacheDOM() {
    questionsContainer = document.getElementById('questions');
    searchInput = document.getElementById('searchInput');
    clearSearchBtn = document.getElementById('clearSearchBtn');
    categoryContainer = document.getElementById('categoryFilters');
    statsTotalEl = document.getElementById('statTotal');
    statsAnsweredEl = document.getElementById('statAnswered');
    statsCorrectEl = document.getElementById('statCorrect');
    statsScoreEl = document.getElementById('statScore');
    statsBookmarkedEl = document.getElementById('statBookmarked');
    progressBarEl = document.getElementById('progressBar');
    backToTopBtn = document.getElementById('backToTop');
    themeToggleBtn = document.getElementById('themeToggle');
}

function setupEventListeners() {
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value.toLowerCase().trim();
            if (clearSearchBtn) {
                clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
            }
            renderQuestions();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                state.searchQuery = '';
                clearSearchBtn.style.display = 'none';
                renderQuestions();
            }
        });
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            if (searchInput) searchInput.focus();
        } else if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
            state.searchQuery = '';
            if (clearSearchBtn) clearSearchBtn.style.display = 'none';
            searchInput.blur();
            renderQuestions();
        }
    });
}

// Category List Extraction
function getCategories() {
    const categories = ["All"];
    questionsData.forEach(q => {
        if (q.category && !categories.includes(q.category)) {
            categories.push(q.category);
        }
    });
    return categories;
}

function renderCategories() {
    if (!categoryContainer) return;
    const categories = getCategories();

    categoryContainer.innerHTML = categories.map(cat => `
        <button class="filter-chip ${state.selectedCategory === cat && !state.showBookmarkedOnly ? 'active' : ''}" 
                onclick="setCategory('${cat}')"
                aria-pressed="${state.selectedCategory === cat && !state.showBookmarkedOnly}">
            ${cat}
        </button>
    `).join('') + `
        <button class="filter-chip ${state.showBookmarkedOnly ? 'active bookmark-chip' : ''}" 
                onclick="toggleBookmarkFilter()"
                aria-pressed="${state.showBookmarkedOnly}">
            ⭐ Bookmarked (${state.bookmarks.size})
        </button>
    `;
}

function setCategory(category) {
    state.selectedCategory = category;
    state.showBookmarkedOnly = false;
    renderCategories();
    renderQuestions();
}

function toggleBookmarkFilter() {
    state.showBookmarkedOnly = !state.showBookmarkedOnly;
    renderCategories();
    renderQuestions();
}

function getCorrectOptionIndex(ansString) {
    const match = ansString.match(/^([a-d])\)/i);
    if (!match) return -1;
    const char = match[1].toLowerCase();
    return char.charCodeAt(0) - 97; // 'a' -> 0, 'b' -> 1, 'c' -> 2, 'd' -> 3
}

function renderQuestions() {
    if (!questionsContainer) return;

    const filtered = questionsData.filter((item, index) => {
        // Category Filter
        if (state.showBookmarkedOnly) {
            if (!state.bookmarks.has(index)) return false;
        } else if (state.selectedCategory !== 'All' && item.category !== state.selectedCategory) {
            return false;
        }

        // Search Query Filter
        if (state.searchQuery) {
            const inQ = item.q.toLowerCase().includes(state.searchQuery);
            const inAns = item.ans.toLowerCase().includes(state.searchQuery);
            const inOpts = item.options.some(opt => opt.toLowerCase().includes(state.searchQuery));
            return inQ || inAns || inOpts;
        }

        return true;
    });

    if (filtered.length === 0) {
        questionsContainer.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="empty-icon">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <h3>No questions found</h3>
                <p>Try adjusting your search query or selecting a different topic category.</p>
                <button class="btn btn-secondary" onclick="resetFilters()">Clear Filters</button>
            </div>
        `;
        return;
    }

    questionsContainer.innerHTML = filtered.map((item) => {
        const originalIndex = questionsData.findIndex(q => q.id === item.id);
        const correctIndex = getCorrectOptionIndex(item.ans);
        const selectedIndex = state.userAnswers[originalIndex];
        const isAnswerShown = state.visibleAnswers.has(originalIndex);
        const isBookmarked = state.bookmarks.has(originalIndex);

        return `
            <div class="question-card ${selectedIndex !== undefined ? 'answered' : ''}" id="q-card-${originalIndex}">
                <div class="card-header">
                    <div class="card-meta">
                        <span class="q-badge">Q${originalIndex + 1}</span>
                        <span class="category-tag">${item.category}</span>
                    </div>
                    <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" 
                            onclick="toggleBookmark(${originalIndex})" 
                            title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}"
                            aria-label="Bookmark Question ${originalIndex + 1}">
                        <svg width="20" height="20" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </button>
                </div>

                <h3 class="q-text">${escapeHTML(item.q)}</h3>

                <div class="options-grid" role="radiogroup" aria-label="Question ${originalIndex + 1} options">
                    ${item.options.map((opt, optIdx) => {
                        const optLetter = String.fromCharCode(97 + optIdx);
                        let optionClass = "option-btn";

                        if (selectedIndex !== undefined) {
                            if (optIdx === correctIndex) {
                                optionClass += " correct";
                            } else if (optIdx === selectedIndex) {
                                optionClass += " incorrect";
                            } else {
                                optionClass += " dimmed";
                            }
                        }

                        return `
                            <button class="${optionClass}" 
                                    onclick="selectOption(${originalIndex}, ${optIdx})"
                                    ${selectedIndex !== undefined ? 'disabled' : ''}
                                    role="radio"
                                    aria-checked="${selectedIndex === optIdx}">
                                <span class="opt-letter">${optLetter.toUpperCase()}</span>
                                <span class="opt-text">${escapeHTML(opt)}</span>
                                ${selectedIndex !== undefined && optIdx === correctIndex ? `
                                    <svg class="status-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                                    </svg>
                                ` : ''}
                                ${selectedIndex !== undefined && optIdx === selectedIndex && optIdx !== correctIndex ? `
                                    <svg class="status-icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                ` : ''}
                            </button>
                        `;
                    }).join('')}
                </div>

                <div class="card-actions">
                    <button class="btn btn-secondary btn-sm" onclick="toggleAnswer(${originalIndex})">
                        ${isAnswerShown ? 'Hide Answer' : 'Show Answer'}
                    </button>

                    ${selectedIndex !== undefined ? `
                        <span class="feedback-badge ${selectedIndex === correctIndex ? 'correct-badge' : 'incorrect-badge'}">
                            ${selectedIndex === correctIndex ? '✓ Correct' : '✗ Incorrect'}
                        </span>
                    ` : ''}
                </div>

                <div class="answer-box ${isAnswerShown ? 'show' : ''}" id="ans-${originalIndex}">
                    <div class="ans-content">
                        <strong>Official Answer:</strong> ${escapeHTML(item.ans)}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function selectOption(questionIdx, optionIdx) {
    if (state.userAnswers[questionIdx] !== undefined) return;

    state.userAnswers[questionIdx] = optionIdx;
    localStorage.setItem('nptel_dbms_user_answers', JSON.stringify(state.userAnswers));
    
    // Automatically show answer explanation on click
    state.visibleAnswers.add(questionIdx);

    renderQuestions();
    updateStats();
}

function toggleAnswer(questionIdx) {
    if (state.visibleAnswers.has(questionIdx)) {
        state.visibleAnswers.delete(questionIdx);
    } else {
        state.visibleAnswers.add(questionIdx);
    }
    renderQuestions();
}

function showAllAnswers() {
    questionsData.forEach((_, idx) => state.visibleAnswers.add(idx));
    renderQuestions();
}

function hideAllAnswers() {
    state.visibleAnswers.clear();
    renderQuestions();
}

function toggleBookmark(questionIdx) {
    if (state.bookmarks.has(questionIdx)) {
        state.bookmarks.delete(questionIdx);
    } else {
        state.bookmarks.add(questionIdx);
    }
    localStorage.setItem('nptel_dbms_bookmarks', JSON.stringify(Array.from(state.bookmarks)));
    renderCategories();
    renderQuestions();
    updateStats();
}

function resetProgress() {
    if (confirm("Are you sure you want to reset all your answer selections and score?")) {
        state.userAnswers = {};
        state.visibleAnswers.clear();
        localStorage.removeItem('nptel_dbms_user_answers');
        renderQuestions();
        updateStats();
    }
}

function resetFilters() {
    state.selectedCategory = "All";
    state.searchQuery = "";
    state.showBookmarkedOnly = false;
    if (searchInput) searchInput.value = "";
    if (clearSearchBtn) clearSearchBtn.style.display = "none";
    renderCategories();
    renderQuestions();
}

function updateStats() {
    const total = questionsData.length;
    const answeredKeys = Object.keys(state.userAnswers);
    const answeredCount = answeredKeys.length;
    let correctCount = 0;

    answeredKeys.forEach(idxStr => {
        const idx = parseInt(idxStr, 10);
        const selectedOpt = state.userAnswers[idx];
        const correctOpt = getCorrectOptionIndex(questionsData[idx].ans);
        if (selectedOpt === correctOpt) {
            correctCount++;
        }
    });

    const percent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const overallProgress = Math.round((answeredCount / total) * 100);

    if (statsTotalEl) statsTotalEl.textContent = total;
    if (statsAnsweredEl) statsAnsweredEl.textContent = answeredCount;
    if (statsCorrectEl) statsCorrectEl.textContent = correctCount;
    if (statsScoreEl) statsScoreEl.textContent = `${percent}%`;
    if (statsBookmarkedEl) statsBookmarkedEl.textContent = state.bookmarks.size;

    if (progressBarEl) {
        progressBarEl.style.width = `${overallProgress}%`;
        progressBarEl.setAttribute('aria-valuenow', overallProgress);
    }
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('nptel_dbms_theme', state.theme);
    applyTheme(state.theme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`);
        themeToggleBtn.innerHTML = theme === 'light' ? `
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
        ` : `
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
        `;
    }
}

function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
