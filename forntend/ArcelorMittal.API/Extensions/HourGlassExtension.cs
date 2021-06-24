using System;
using System.Collections.Generic;

namespace ArcelorMittal.API.Extensions
{
    public static class HourGlassExtension
    {
        public static int FindMaxSum(this List<List<int>> mat)
        {
            const int r = 5;
            const int c = 5;

            // Here loop runs (R-2)*(C-2)
            // times considering different
            // top left cells of hour glasses.
            var maxSum = int.MinValue;
            for (var i = 0; i < r - 2; i++)
            {
                for (var j = 0; j < c - 2; j++)
                {
                    // Considering mat[i][j] as top
                    // left cell of hour glass.
                    var sum = (mat[i][j] + mat[i][ j + 1] +
                               mat[i][ j + 2]) + (mat[i + 1][ j + 1]) +
                              (mat[i + 2][ j] + mat[i + 2][ j + 1] +
                               mat[i + 2][ j + 2]);
 
                    // If previous sum is less then
                    // current sum then update
                    // new sum in max_sum
                    maxSum = Math.Max(maxSum, sum);
                }
            }
            return maxSum;
        }
    }
}