#include <iostream>

int main() {
  
  // The age of my non existent dog.
  int dog_age = 2;
  int early_years;
  int later_years;
  int human_years;

  // Two years of a dogs life count as 21 human years.
  early_years = 21;
  
  // Each following year counts as 4 human years.
  later_years = (dog_age - 2) * 4;

  // Early Years + Later Years = Human Years
  human_years = early_years + later_years;

    std::cout << "My name is Starburst! Ruff ruff, I am " << human_years << " years old in human years.\n";

}
