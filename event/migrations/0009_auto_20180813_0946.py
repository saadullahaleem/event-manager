# Generated by Django 2.0.8 on 2018-08-13 09:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0008_merge_20180813_0712'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='comment',
            new_name='comments',
        ),
        migrations.RenameField(
            model_name='event',
            old_name='sponser',
            new_name='sponsers',
        ),
        migrations.RenameField(
            model_name='event',
            old_name='tag',
            new_name='tags',
        ),
    ]