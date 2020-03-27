/*
    Dynamic Programming (DP) is an optimzation technique used to solve complex problems by breaking them into smaller subproblems.

    the DP is different from the divide-and-conquer approach

    In DP we usually follow three steps;
        1. define the subproblems
        2. implement the recurrence that solves the subproblems (mostly using the recursion)
        3. Recognize and solve the base cases.

    Famous problems that can be solved with the DP style include;
        1. the Knapsack problem
            Given a set of items, each with a value and volume, determine the best collection of items out of the set in a way to maximize the total value. 
            The constraint of the problem is that the total volume needs to be the volume supported by the 'knapsack' or less.

        2.the longest common subsequence
            find the longest subsequence (a sequence that can be derives from another sequence by deleting some elements without changing the order of the remaining elements) common to all sequences in a set of sequences.

        3. the matrix chain multiplication
            given a sequence of matrices, find the most efficient way to multiply these matrices(with few operations as possible). The multiplication is not performed, the solution is to find the sequences in each of the matrices that need to be multiplied.

        4. Coin change
            find how many different ways we can make change in a particular amount of cents using a given amount of set denominations d1...dn.

        5. All-pairs shortest paths in a graph
            find the shortest path from vertex U to vertex V for all pairs of vertices(u,v)
*/
