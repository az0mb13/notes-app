const event = {
    name: "Zombie apocalypse",
    guestList: ['A', 'V', 'C'],
    printGuestList() {
        console.log('Guest list for ', + this.guestList);
    }
}

event.printGuestList()