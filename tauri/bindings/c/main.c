#include "include/tauri.h"
#include <stdio.h>
#include <string.h>
#include <unistd.h>

int main() {
  app_t *app = new_app();
  run_app(app);
  return 0;
}
