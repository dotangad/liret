<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;

class MakePage extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'make:page {pageName}';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Create React component for new page';

  /**
   * Create a new command instance.
   *
   * @return void
   */
  public function __construct()
  {
    parent::__construct();
  }

  public function cleanPath()
  {
    $parts = explode('/', $this->argument('pageName'));
    $fileName = end($parts);
    array_pop($parts);

    return [
      implode('/', $parts),
      Str::snake($fileName),
      $fileName
    ];
  }

  /**
   * Execute the console command.
   *
   * @return int
   */
  public function handle()
  {
    $path = $this->cleanPath();
    file_put_contents(
      'resources/js/pages/' . implode('/', [$path[0], $path[1]]) . '.tsx',
      str_replace(
        'Page',
        $path[2],
        file_get_contents('./resources/js/pages/template.tsx')
      )
    );

    return 0;
  }
}
