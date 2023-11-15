/*
 *   Copyright (c) 2023 Garmingo
 *   All rights reserved.
 *   Unauthorized use, reproduction, and distribution of this source code is strictly prohibited.
 */


/**
 * Executes only the last call of a function within a given delay.
 * @param func The function to debounce.
 * @param delay The delay in milliseconds.
 * @returns A function that can be called to execute the debounced function.
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;
  
    return function (...args: Parameters<T>): void {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }