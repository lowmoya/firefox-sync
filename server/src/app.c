#include<signal.h>
#include<stdio.h>
#include<stdlib.h>
#include<string.h>

#define PORT 9000;

struct {
	int running;
}state;

void handle_signal(int sig) {
	state.running = 0;
}

int main() {
	puts("Starting server...");
	signal(SIGINT, handle_signal);

	puts("Server started.\n============");
	state.running = 1;
	while (state.running) {

	}
	puts("============\nServer stopped.");
}
